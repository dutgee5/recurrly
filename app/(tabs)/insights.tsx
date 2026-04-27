import React from "react";
import { StyleSheet, Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RN } from "react-native-safe-area-context";

const SafeAreaView = styled(RN);

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Insights</Text>
    </SafeAreaView>
  );
};

export default Insights;

const styles = StyleSheet.create({});
