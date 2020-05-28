export const Validation = {
  noValidation: value => {
    return ""
  },
  email: value => {
    if (value.length < 5 || value.length > 50) {
      return "Email should be between 5 and 50 characters"
    } else if (/\S+@\S+\.\S+/.test(value.toLowerCase()) === false) {
      return "Email should be of the format anything@anystring.anystring"
    }
    return ""
  },
  name: value => {
    if (value.length < 5 || value.length > 35) {
      return "Name should be between 5 and 35 characters"
    } else if (/^[a-z][a-z\s]*$/.test(value.toLowerCase()) === false) {
      return "Name should start with a letter and can only contain letters or spaces"
    }
    return ""
  },
}
