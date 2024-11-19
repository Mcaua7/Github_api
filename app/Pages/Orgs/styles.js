import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  login: {
    fontSize: 12,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: "95%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "#9F9F9F",
  },
  //
  viewOrgs: {
    flex: 8,
    width: "90%",
    marginTop: 50,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#9F9F9F",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  orgs: {
    paddingTop: 10,
  },
});

export default styles;