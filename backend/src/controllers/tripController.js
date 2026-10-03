import { Property } from "../Models/propertyModel.js";
import { planTrip } from "../ai/tripPlanner.js";
import { generateDescription } from "../ai/generateDescription.js";
// Create trip plan
const createTripPlan = async (req, res) => {
    try {
       const {
            destination,
            budget,
            days,
            people,
            interests
        } = req.body;
        //validation

        if (!destination || !budget || !days || !people) {
            return res.status(400).json({
                status: "fail",
                message: "Please fill in destination, budget, days and people"
            });
        }
        const plan = await planTrip({
            destination,
            budget,
            days,
            people,
            interests: interests || []
        });

    //STEP 3 - AI plan created

    const perNight = Number(budget) / Number(days);
        const city = destination.trim();
        const properties = await Property.find({
            $or: [
                {
                    "address.city": {
                        $regex: city,
                        $options: "i"
                    }
                },
                {
                    "address.state": {
                        $regex: city,
                        $options: "i"
                    }
                },
                {
                    "address.area": {
                        $regex: city,
                        $options: "i"
                    }
                }
            ],

            price: {
                $lte: perNight
            },

            maximumGuest: {
                $gte: Number(people)
            }

        }).limit(6);

//STEP 4 - Properties found
        return res.status(200).json({
            status: "success",
            data: {
                plan,
                properties,
                perNight
            }
        });

    } catch (error) {
       console.error("TRIP ERROR:", error.message);
        return res.status(500).json({
            status: "fail",
            message: error?.message || "Could not create a trip plan"
        });
    }
};


// Generate description
const writeDescription = async (req, res) => {
    try {
        const description = await generateDescription(req.body);

        return res.status(200).json({
            status: "success",
            data: {
                description
            }
        });

    } catch (error) {
        console.error("GENERATE DESCRIPTION ERROR:", error.message);
      return res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};
export { createTripPlan, writeDescription };

