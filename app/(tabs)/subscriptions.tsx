import React from "react";
import { StyleSheet, Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RN } from "react-native-safe-area-context";

const SafeAreaView = styled(RN);

const Subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Subscriptions</Text>
    </SafeAreaView>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({});
