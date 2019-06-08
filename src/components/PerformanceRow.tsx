import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  stageTime: string;
  categoryInfo: string;
  appearances: string[];
}

const PerformanceRow: React.FC<Props> = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.stageTime}>{props.stageTime}</Text>

      <View style={styles.container}>
        <Text style={styles.categoryInfo}>{props.categoryInfo}</Text>
        <Text>{props.appearances.join("\n")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 20
  },
  stageTime: {
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    marginLeft: 15
  },
  categoryInfo: {
    fontWeight: "bold"
  }
});

export default PerformanceRow;