import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";
import ButtonViewMoreVertical from "../button/ButtonViewMoreDown";

type TextCollapseProps = {};

const TextCollapse: React.FC<TextCollapseProps> = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <View style={styles.description}>
      <View style={styles.header}>
        <Text style={styles.title}>{`Description`}</Text>
      </View>
      <View style={[styles.body, { height: opened ? "auto" : 100 }]}>
        <Text style={styles.content}>
          {`Lorem ipsum dolor sit amet consectetur. Purus orci amet laoreet laoreet hac elit. Morbi nisi condimentum proin elit nisi pellentesque nunc sit. Tortor condimentum praesent lobortis cras sed. Nisi leo sollicitudin nulla donec feugiat fringilla hac aliquam accumsan. Risus nulla purus habitant in purus.\nFusce duis vulputate sed ultrices. Tempus quis fringilla posuere malesuada leo quis platea tortor consectetur. Sapien turpis velit eros neque porta. At nulla ultricies quis posuere facilisis quis lacus gravida. In ullamcorper malesuada ut felis ipsum phasellus interdum quam mus. Nullam sed nunc eu gravida elementum.`}
        </Text>
      </View>
      <ButtonViewMoreVertical
        buttonOnclick={() => {
          setOpened(!opened);
        }}
        status={opened ? "down" : "up"}
      />
    </View>
  );
};
export default TextCollapse;

const styles = StyleSheet.create({
  description: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 12,
  },
  header: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 0,
  },
  title: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
  },
  body: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 0,
    overflow: "hidden",
  },
  content: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
  },
});
