import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: "collumn",
    maragin: 30,
    border: 4,
    borderColor: "red",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  viewInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 60,
  },
  input: {
    flex: 0,
    height: 40,
    width: "80%",
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    paddingRight: 10,
    justifyContent: "center",
  },
  loginInput: {
    flex: 0,
    height: 40,
    borderRadius: 10,
    paddingRight: 10,
    justifyContent: "center",
    padding: 10,
  },
  searchButton: {
    fontSize: 40,
    fontWeight: "bold",
    paddingLeft: 10,
  },
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
  viewTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default styles;
