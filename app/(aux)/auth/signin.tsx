import { StyleSheet, Text, View } from "react-native";
import React, {  useEffect, useState } from "react";
import { Path, Svg } from "react-native-svg";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { service } from "../../../service";
import Navtop from "../../../components/nav/NavTop";
import Logo from "../../../components/ui/Logo";
import RememberComponent from "../../../components/inputContainer/RememberComponent";
import InputContainer from "../../../components/inputContainer/InputContainer";
import LabelComponent from "../../../components/inputContainer/LabelComponent";
import ButtonSubmit from "../../../components/button/ButtonSubmit";
import DividerText from "../../../components/divider/DividerText";
import ButtonProvider from "../../../components/button/ButtonProvider";
import { Input, Provider } from "./signup";

const login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const providers: Provider[] = [
    {
      name: "google",
      title: "Google",
      icon: (
        <Svg height={24} width={24} viewBox="0 0 24 24">
          <Path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <Path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <Path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <Path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
          <Path d="M1 1h22v22H1z" fill="none" />
        </Svg>
      ),
    },
    {
      name: "facebook",
      title: "Facebook",
      icon: (
        <View>
          <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <Path
              d="M20.5 10C20.5 4.47715 16.0229 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 14.9913 4.15686 19.1283 8.9375 19.8785V12.8906H6.39844V10H8.9375V7.79688C8.9375 5.29063 10.4304 3.90625 12.7146 3.90625C13.8087 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6921C12.4499 6.5625 12.0625 7.33334 12.0625 8.12416V10H14.8359L14.3926 12.8906H12.0625V19.8785C16.8431 19.1283 20.5 14.9913 20.5 10Z"
              fill="#1877F2"
            />
            <Path
              d="M14.3926 12.8906L14.8359 10H12.0625V8.12416C12.0625 7.33334 12.4499 6.5625 13.6921 6.5625H14.9531V4.10156C14.9531 4.10156 13.8087 3.90625 12.7146 3.90625C10.4304 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C9.44662 19.9584 9.96844 20 10.5 20C11.0316 20 11.5534 19.9584 12.0625 19.8785V12.8906H14.3926Z"
              fill="white"
            />
          </Svg>
        </View>
      ),
    },
  ];

  const Inputs: Input[] = [
    {
      label: "Email",
      type: "email-address",
      placeholder: "your@email.com",
      icon: (
        <Svg
          style={styles.vectorEmail}
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
        >
          <Path
            d="M2.33334 13.6667C1.87501 13.6667 1.48264 13.5035 1.15626 13.1771C0.829866 12.8507 0.666672 12.4583 0.666672 12V2C0.666672 1.54167 0.829866 1.1493 1.15626 0.822915C1.48264 0.496527 1.87501 0.333332 2.33334 0.333332H15.6667C16.125 0.333332 16.5174 0.496527 16.8438 0.822915C17.1701 1.1493 17.3333 1.54167 17.3333 2V12C17.3333 12.4583 17.1701 12.8507 16.8438 13.1771C16.5174 13.5035 16.125 13.6667 15.6667 13.6667H2.33334ZM9.00001 7.83333L2.33334 3.66667V12H15.6667V3.66667L9.00001 7.83333ZM9.00001 6.16667L15.6667 2H2.33334L9.00001 6.16667ZM2.33334 3.66667V2V12V3.66667Z"
            fill="#919BAD"
          />
        </Svg>
      ),
    },
    {
      label: "Password",
      type: "visible-password",
      placeholder: "password",
      icon: (
        <Svg
          style={styles.vectorPassword}
          width="14"
          height="19"
          viewBox="0 0 14 19"
          fill="none"
        >
          <Path
            d="M1.99999 18.3333C1.54166 18.3333 1.1493 18.1701 0.822912 17.8438C0.496523 17.5174 0.333328 17.125 0.333328 16.6667V8.33334C0.333328 7.875 0.496523 7.48264 0.822912 7.15625C1.1493 6.82986 1.54166 6.66667 1.99999 6.66667H2.83333V5C2.83333 3.84722 3.23958 2.86459 4.05208 2.05209C4.86458 1.23959 5.84722 0.833336 6.99999 0.833336C8.15277 0.833336 9.13541 1.23959 9.94791 2.05209C10.7604 2.86459 11.1667 3.84722 11.1667 5V6.66667H12C12.4583 6.66667 12.8507 6.82986 13.1771 7.15625C13.5035 7.48264 13.6667 7.875 13.6667 8.33334V16.6667C13.6667 17.125 13.5035 17.5174 13.1771 17.8438C12.8507 18.1701 12.4583 18.3333 12 18.3333H1.99999ZM1.99999 16.6667H12V8.33334H1.99999V16.6667ZM6.99999 14.1667C7.45833 14.1667 7.85069 14.0035 8.17708 13.6771C8.50347 13.3507 8.66666 12.9583 8.66666 12.5C8.66666 12.0417 8.50347 11.6493 8.17708 11.3229C7.85069 10.9965 7.45833 10.8333 6.99999 10.8333C6.54166 10.8333 6.1493 10.9965 5.82291 11.3229C5.49652 11.6493 5.33333 12.0417 5.33333 12.5C5.33333 12.9583 5.49652 13.3507 5.82291 13.6771C6.1493 14.0035 6.54166 14.1667 6.99999 14.1667ZM4.49999 6.66667H9.49999V5C9.49999 4.30556 9.25694 3.71528 8.77083 3.22917C8.28472 2.74306 7.69444 2.5 6.99999 2.5C6.30555 2.5 5.71527 2.74306 5.22916 3.22917C4.74305 3.71528 4.49999 4.30556 4.49999 5V6.66667Z"
            fill="#919BAD"
          />
        </Svg>
      ),
    },
  ];

  const handleLogin = async () => {
    try {
      let credentials = {
        email: email,
        password: password,
      };
      const { data } = await service.login.loginCreate(credentials);
      if (data?.user) {
        dispatch({ type: "SET_USER", payload: data?.user });
        await AsyncStorage.setItem("userData", JSON.stringify(data?.user));

        router.push("/");
      } else {
        console.log("Unkown Error Please try again ...");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRedirect = (route: string) => {
    router.push(route);
  };
 
  return (
    <View>
      <View style={styles.navWrapper}>
        <Navtop title="Log In" />
      </View>

      <View style={styles.logoWrapper}>
        <Logo />
      </View>
      <View style={styles.formWrapper}>
        {Inputs.map &&
          Inputs.map((input: Input, index: number) => (
            <InputContainer
              key={index}
              input={input}
              value={input.type === "email-address" ? email : password}
              onChangeText={
                input.type === "email-address"
                  ? handleEmailChange
                  : handlePasswordChange
              }
            />
          ))}

        <View style={styles.row}>
          <RememberComponent />
          <LabelComponent label="Forget password" />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonSubmit title="Log in" onClick={handleLogin} />
          <View style={styles.space} />
        </View>
      </View>
      <View>
        <DividerText title="or continue with" />
      </View>
      <View style={styles.rowProviders}>
        {providers.map &&
          providers.map((provider: Provider, index: number) => (
            <View style={styles.column} key={index}>
              <ButtonProvider provider={provider} />
            </View>
          ))}
      </View>
      <View style={styles.ctasignupwrapper}>
        <Text style={styles.alreadyhaveanaccount}>
          {`Don't have an account ? `}
        </Text>
        <Text
          style={styles.linksignup}
          onPress={() => handleRedirect("/signup")}
        >
          {`Sign up`}
        </Text>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  navWrapper: {
    marginBottom: 24,
  },
  logoWrapper: {
    marginBottom: 24,
  },
  formWrapper: {
    paddingHorizontal: 24,
  },
  vectorEmail: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 2,
    bottom: 3,
    left: 2,
    overflow: "visible",
  },
  vectorPassword: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 3,
    bottom: 2,
    left: 3,
    overflow: "visible",
  },
  ctasignupwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    columnGap: 4,
  },
  forgetPassword: {
    flexShrink: 0,
    textAlign: "right",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  rowProviders: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 44,
    gap: 10,
  },
  column: {
    flex: 1,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
  space: {
    width: 10,
  },
  alreadyhaveanaccount: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
  },
  linksignup: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
});
