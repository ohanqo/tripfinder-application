const extractError = (errorObject) => {
  const genericError = "Une erreur est survenue.";

  for (const property in errorObject) {
    if (errorObject.hasOwnProperty(property)) {
      return errorObject[property][0] ?? genericError;
    }
  }

  return genericError;
};

export default extractError;
