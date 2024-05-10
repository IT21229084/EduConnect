export default async (data, eventType) => {
    const { user, course, amount } = data;
    const userId = user._id;
    const courseId = course._id;
  
    if (!userId || !courseId || !amount) {
      throw new Error("Invalid data");
    }
  
    const payload = {
      event: eventType,
      data: {
        userId,
        courseId,
        amount,
      },
    };
  
    return payload;
  };
  