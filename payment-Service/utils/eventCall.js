import axios from "axios"

export default PublishCustomerEvent = async (payload) => {
  try {
    // await axios.post("http://localhost:8000/customer/app-event", {
    //   payload,
    // });
    console.log("Event published to customer service");
  } catch (err) {
    console.log(err);
  }
};
