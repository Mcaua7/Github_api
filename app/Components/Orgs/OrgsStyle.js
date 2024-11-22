import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button:{
    flex: 1,
    flexDirection: "collumn",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  viewOrgs: {
    flexDirection: "row",
  },
  viewIcon: {
    flex: 0,
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "lightgrey",
    padding: 5,
  },
  icon: {
    fontWeight: "bold",
    fontSize: 30,
  },
  Info: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowIcon:{
    flex: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
