import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/user/:userid
export const GET = async (request, { params }) => {
  //params allows us to grab the id
  try {
    await connectDB();

    const userId = params.userId;

    if (!userId) {
      return new Response("User ID is required", { status: 400 });
    }

    const properties = await Property.find({ ownder: userId });

    return Response.json(properties);
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
