import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "collumn",
    maragin: 30,
    border: 4,
    borderColor: "red",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  MainInformations: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  MoreInformations: {
    flex: 2,
    width: 350,
    height: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  reset: {
    flex: 0,
    backgroundColor: "white",
    height: 100,
    width: "99%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonReset: {
    borderWidth: 2,
    borderRadius: 20,
    width: "80%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
