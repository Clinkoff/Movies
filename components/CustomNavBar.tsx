import { icons } from "@/constants/icons";
import tailwindConfig from "@/tailwind.config.js"; // Se não for usado em outro lugar, pode ser removido
import { PlatformPressable } from "@react-navigation/elements";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import resolveConfig from "tailwindcss/resolveConfig";

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const AnimatedPlatformPressable = Animated.createAnimatedComponent(PlatformPressable);

const fullConfig = resolveConfig(tailwindConfig);
const tailwindColors = fullConfig.theme.colors as Record<string, any>;

function CustomNavBar({ state, descriptors, navigation }: BottomTabBarProps) {
  // const { buildHref } = useLinkBuilder();

  return (
    <View
      className="
        absolute bottom-11 w-[80%] self-center flex-row items-center 
        justify-around rounded-[30px] bg-secondary px-3 py-4
      "
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <AnimatedPlatformPressable
            layout={LinearTransition.springify().mass(0.8).duration(300)}
            key={route.key}
            className="items-center justify-center"
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabItemBase,
              isFocused && styles.tabItemFocused,
            ]}
          >
            <Image
              source={icons[route.name as keyof typeof icons]}
              className="size-5 m-1"
              resizeMode="contain"
              tintColor={
                isFocused
                  ? (tailwindColors.accent as string)
                  : (tailwindColors.light[100] as string)
              }
            />
            {isFocused && (
              <Text className="text-light-100">{label as string}</Text>
            )}
          </AnimatedPlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabItemBase: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    borderRadius: 0,
    paddingHorizontal: 0,
    backgroundColor: "transparent",
  },
  tabItemFocused: {
    backgroundColor: tailwindColors.dark[100],
    borderRadius: 20,
    paddingHorizontal: 10,
  },

});

export default CustomNavBar;