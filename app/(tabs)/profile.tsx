import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import Navtop from "../../components/nav/NavTop";
import DividerProfile from "../../components/divider/Divider";
import ButtonParameters from "../../components/button/ButtonParameters";
import Features from "../../components/features/features";
import Buttonlogout from "../../components/button/ButtonLogout";
import { ScrollView } from "react-native-gesture-handler";
import { themeGlobal } from "../../styles/themeGlobal";
import ButtonText from "../../components/button/ButtonText";
import ArrowRight from "../../components/icons/ArrowRight";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reduxState/ReduxState";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.userData);
  const handleLogout = async () => {
    await AsyncStorage.setItem("userData", ''); 
    router.replace('/auth/signin')
  };
 
  return (
    <View style={themeGlobal.baseStyles.container}>
      <ScrollView>
        <View style={styles.profile}>
          <ImageBackground
            style={styles.avatar}
            source={{
              uri: "https://dummyimage.com/80x80/000/fff.jpg",
            }}
          />
          <View style={styles.text}>
            <Text style={styles.ronaldRichards}>
              {user?.firstName ?? "first name"}
            </Text>
            <Text
              style={
                styles.loremipsumdolorsitametconsecteturVivamuscongueodiorisustinciduntsed
              }
            >
              {`Lorem ipsum dolor sit amet consectetur. Vivamus congue odio risus tincidunt sed.`}
            </Text>
          </View>
          <ButtonText title="Edit Profile" buttonLink={"/editProfile"} />
        </View>
        <DividerProfile />
        <ButtonParameters
          title="Orders"
          icon="M3 17.3333C2.30556 17.3333 1.71528 17.0903 1.22917 16.6042C0.743056 16.1181 0.5 15.5278 0.5 14.8333V13.1667C0.5 12.9306 0.579861 12.7326 0.739583 12.5729C0.899306 12.4132 1.09722 12.3333 1.33333 12.3333H3V1.27083C3 1.14583 3.05556 1.06944 3.16667 1.04167C3.27778 1.01389 3.38889 1.05555 3.5 1.16667L4.25 1.91667L5.20833 0.958332C5.29167 0.874999 5.38889 0.833332 5.5 0.833332C5.61111 0.833332 5.70833 0.874999 5.79167 0.958332L6.75 1.91667L7.70833 0.958332C7.79167 0.874999 7.88889 0.833332 8 0.833332C8.11111 0.833332 8.20833 0.874999 8.29167 0.958332L9.25 1.91667L10.2083 0.958332C10.2917 0.874999 10.3889 0.833332 10.5 0.833332C10.6111 0.833332 10.7083 0.874999 10.7917 0.958332L11.75 1.91667L12.7083 0.958332C12.7917 0.874999 12.8889 0.833332 13 0.833332C13.1111 0.833332 13.2083 0.874999 13.2917 0.958332L14.25 1.91667L15 1.16667C15.1111 1.05555 15.2222 1.01042 15.3333 1.03125C15.4444 1.05208 15.5 1.13194 15.5 1.27083V14.8333C15.5 15.5278 15.2569 16.1181 14.7708 16.6042C14.2847 17.0903 13.6944 17.3333 13 17.3333H3ZM13 15.6667C13.2361 15.6667 13.434 15.5868 13.5938 15.4271C13.7535 15.2674 13.8333 15.0694 13.8333 14.8333V3.16667H4.66667V12.3333H11.3333C11.5694 12.3333 11.7674 12.4132 11.9271 12.5729C12.0868 12.7326 12.1667 12.9306 12.1667 13.1667V14.8333C12.1667 15.0694 12.2465 15.2674 12.4062 15.4271C12.566 15.5868 12.7639 15.6667 13 15.6667ZM6.3125 6.5C6.07639 6.5 5.88194 6.42014 5.72917 6.26042C5.57639 6.10069 5.5 5.90278 5.5 5.66667C5.5 5.43055 5.57986 5.23264 5.73958 5.07292C5.89931 4.91319 6.09722 4.83333 6.33333 4.83333H9.66667C9.90278 4.83333 10.1007 4.91319 10.2604 5.07292C10.4201 5.23264 10.5 5.43055 10.5 5.66667C10.5 5.90278 10.4201 6.10069 10.2604 6.26042C10.1007 6.42014 9.90278 6.5 9.66667 6.5H6.3125ZM6.3125 9C6.07639 9 5.88194 8.92014 5.72917 8.76042C5.57639 8.60069 5.5 8.40278 5.5 8.16667C5.5 7.93055 5.57986 7.73264 5.73958 7.57292C5.89931 7.41319 6.09722 7.33333 6.33333 7.33333H9.66667C9.90278 7.33333 10.1007 7.41319 10.2604 7.57292C10.4201 7.73264 10.5 7.93055 10.5 8.16667C10.5 8.40278 10.4201 8.60069 10.2604 8.76042C10.1007 8.92014 9.90278 9 9.66667 9H6.3125ZM12.1667 6.5C11.9306 6.5 11.7326 6.42014 11.5729 6.26042C11.4132 6.10069 11.3333 5.90278 11.3333 5.66667C11.3333 5.43055 11.4132 5.23264 11.5729 5.07292C11.7326 4.91319 11.9306 4.83333 12.1667 4.83333C12.4028 4.83333 12.6007 4.91319 12.7604 5.07292C12.9201 5.23264 13 5.43055 13 5.66667C13 5.90278 12.9201 6.10069 12.7604 6.26042C12.6007 6.42014 12.4028 6.5 12.1667 6.5ZM12.1667 9C11.9306 9 11.7326 8.92014 11.5729 8.76042C11.4132 8.60069 11.3333 8.40278 11.3333 8.16667C11.3333 7.93055 11.4132 7.73264 11.5729 7.57292C11.7326 7.41319 11.9306 7.33333 12.1667 7.33333C12.4028 7.33333 12.6007 7.41319 12.7604 7.57292C12.9201 7.73264 13 7.93055 13 8.16667C13 8.40278 12.9201 8.60069 12.7604 8.76042C12.6007 8.92014 12.4028 9 12.1667 9ZM3 15.6667H10.5V14H2.16667V14.8333C2.16667 15.0694 2.24653 15.2674 2.40625 15.4271C2.56597 15.5868 2.76389 15.6667 3 15.6667Z"
          label=""
          action={() => {
            router.push("/orders");
          }}
          iconRight={<ArrowRight />}
        />
        <Features></Features>
        <DividerProfile />
        <ButtonParameters
          title="Wishlist"
          icon="M7.87496 14.3333L6.43746 13.0208C4.96524 11.6736 3.63538 10.3368 2.44788 9.01041C1.26038 7.68403 0.666626 6.22222 0.666626 4.625C0.666626 3.31944 1.10413 2.22916 1.97913 1.35416C2.85413 0.479164 3.9444 0.0416641 5.24996 0.0416641C5.98607 0.0416641 6.68052 0.197914 7.33329 0.510414C7.98607 0.822914 8.54163 1.25 8.99996 1.79166C9.45829 1.25 10.0138 0.822914 10.6666 0.510414C11.3194 0.197914 12.0138 0.0416641 12.75 0.0416641C14.0555 0.0416641 15.1458 0.479164 16.0208 1.35416C16.8958 2.22916 17.3333 3.31944 17.3333 4.625C17.3333 6.22222 16.743 7.6875 15.5625 9.02083C14.3819 10.3542 13.0416 11.6944 11.5416 13.0417L10.125 14.3333C9.80552 14.6389 9.43052 14.7917 8.99996 14.7917C8.5694 14.7917 8.1944 14.6389 7.87496 14.3333ZM8.20829 3.45833C7.80552 2.88889 7.37496 2.45486 6.91663 2.15625C6.45829 1.85764 5.90274 1.70833 5.24996 1.70833C4.41663 1.70833 3.72218 1.98611 3.16663 2.54166C2.61107 3.09722 2.33329 3.79166 2.33329 4.625C2.33329 5.34722 2.59024 6.11458 3.10413 6.92708C3.61802 7.73958 4.2326 8.52778 4.94788 9.29167C5.66315 10.0556 6.39927 10.7708 7.15621 11.4375C7.91315 12.1042 8.52774 12.6528 8.99996 13.0833C9.47218 12.6528 10.0868 12.1042 10.8437 11.4375C11.6007 10.7708 12.3368 10.0556 13.052 9.29167C13.7673 8.52778 14.3819 7.73958 14.8958 6.92708C15.4097 6.11458 15.6666 5.34722 15.6666 4.625C15.6666 3.79166 15.3888 3.09722 14.8333 2.54166C14.2777 1.98611 13.5833 1.70833 12.75 1.70833C12.0972 1.70833 11.5416 1.85764 11.0833 2.15625C10.625 2.45486 10.1944 2.88889 9.79163 3.45833C9.6944 3.59722 9.57635 3.70139 9.43746 3.77083C9.29857 3.84028 9.15274 3.875 8.99996 3.875C8.84718 3.875 8.70135 3.84028 8.56246 3.77083C8.42357 3.70139 8.30552 3.59722 8.20829 3.45833Z"
          label="120 items"
          action={() => {
            router.push("/wishlist");
          }}
          iconRight={<ArrowRight />}
        />
        <ButtonParameters
          title="Reviews"
          icon="M5.27217 12.1845L8.05 10.509L10.8278 12.2066L10.1003 9.03191L12.5474 6.91546L9.32868 6.62886L8.05 3.63057L6.77132 6.60682L3.55256 6.89342L5.9997 9.03191L5.27217 12.1845ZM8.05 12.5814L4.39032 14.786C4.22865 14.8889 4.05962 14.933 3.88325 14.9183C3.70688 14.9036 3.55256 14.8448 3.42028 14.7419C3.28801 14.639 3.18512 14.5104 3.11164 14.3561C3.03815 14.2018 3.02345 14.0291 3.06754 13.838L4.03758 9.67125L0.796777 6.87137C0.649802 6.73909 0.557942 6.58844 0.521198 6.41942C0.484455 6.2504 0.495478 6.08505 0.554268 5.92338C0.613058 5.76171 0.701243 5.62943 0.818823 5.52655C0.936403 5.42367 1.09808 5.35753 1.30384 5.32813L5.58082 4.95335L7.23429 1.02911C7.30778 0.85274 7.42168 0.720463 7.57601 0.632278C7.73033 0.544093 7.88833 0.5 8.05 0.5C8.21167 0.5 8.36967 0.544093 8.524 0.632278C8.67832 0.720463 8.79222 0.85274 8.86571 1.02911L10.5192 4.95335L14.7962 5.32813C15.0019 5.35753 15.1636 5.42367 15.2812 5.52655C15.3988 5.62943 15.4869 5.76171 15.5457 5.92338C15.6045 6.08505 15.6155 6.2504 15.5788 6.41942C15.5421 6.58844 15.4502 6.73909 15.3032 6.87137L12.0624 9.67125L13.0325 13.838C13.0766 14.0291 13.0619 14.2018 12.9884 14.3561C12.9149 14.5104 12.812 14.639 12.6797 14.7419C12.5474 14.8448 12.3931 14.9036 12.2167 14.9183C12.0404 14.933 11.8714 14.8889 11.7097 14.786L8.05 12.5814Z"
          label=""
          action={() => {
            router.push("/reviews");
          }}
          iconRight={<ArrowRight />}
        />
        <ButtonParameters
          title="Recently viewed"
          icon="M8 15.5C6.25 15.5 4.70139 14.9687 3.35417 13.9062C2.00694 12.8437 1.13194 11.4861 0.729167 9.83333C0.673611 9.625 0.715278 9.43403 0.854167 9.26042C0.993056 9.08681 1.18056 8.98611 1.41667 8.95833C1.63889 8.93056 1.84028 8.97222 2.02083 9.08333C2.20139 9.19444 2.32639 9.36111 2.39583 9.58333C2.72917 10.8333 3.41667 11.8542 4.45833 12.6458C5.5 13.4375 6.68056 13.8333 8 13.8333C9.625 13.8333 11.0035 13.2674 12.1354 12.1354C13.2674 11.0035 13.8333 9.625 13.8333 8C13.8333 6.375 13.2674 4.99653 12.1354 3.86458C11.0035 2.73264 9.625 2.16667 8 2.16667C7.04167 2.16667 6.14583 2.38889 5.3125 2.83333C4.47917 3.27778 3.77778 3.88889 3.20833 4.66667H4.66667C4.90278 4.66667 5.10069 4.74653 5.26042 4.90625C5.42014 5.06597 5.5 5.26389 5.5 5.5C5.5 5.73611 5.42014 5.93403 5.26042 6.09375C5.10069 6.25347 4.90278 6.33333 4.66667 6.33333H1.33333C1.09722 6.33333 0.899306 6.25347 0.739583 6.09375C0.579861 5.93403 0.5 5.73611 0.5 5.5V2.16667C0.5 1.93056 0.579861 1.73264 0.739583 1.57292C0.899306 1.41319 1.09722 1.33333 1.33333 1.33333C1.56944 1.33333 1.76736 1.41319 1.92708 1.57292C2.08681 1.73264 2.16667 1.93056 2.16667 2.16667V3.29167C2.875 2.40278 3.73958 1.71528 4.76042 1.22917C5.78125 0.743056 6.86111 0.5 8 0.5C9.04167 0.5 10.0174 0.697917 10.9271 1.09375C11.8368 1.48958 12.6285 2.02431 13.3021 2.69792C13.9757 3.37153 14.5104 4.16319 14.9062 5.07292C15.3021 5.98264 15.5 6.95833 15.5 8C15.5 9.04167 15.3021 10.0174 14.9062 10.9271C14.5104 11.8368 13.9757 12.6285 13.3021 13.3021C12.6285 13.9757 11.8368 14.5104 10.9271 14.9062C10.0174 15.3021 9.04167 15.5 8 15.5ZM8.83333 7.66667L10.9167 9.75C11.0694 9.90278 11.1458 10.0972 11.1458 10.3333C11.1458 10.5694 11.0694 10.7639 10.9167 10.9167C10.7639 11.0694 10.5694 11.1458 10.3333 11.1458C10.0972 11.1458 9.90278 11.0694 9.75 10.9167L7.41667 8.58333C7.33333 8.5 7.27083 8.40625 7.22917 8.30208C7.1875 8.19792 7.16667 8.09028 7.16667 7.97917V4.66667C7.16667 4.43056 7.24653 4.23264 7.40625 4.07292C7.56597 3.91319 7.76389 3.83333 8 3.83333C8.23611 3.83333 8.43403 3.91319 8.59375 4.07292C8.75347 4.23264 8.83333 4.43056 8.83333 4.66667V7.66667Z"
          label=""
          action={() => {
            router.push("/recentlyViewed");
          }}
          iconRight={<ArrowRight />}
        />
        <DividerProfile />
        <ButtonParameters
          title="Account settings"
          icon="M10.5625 17.3333H7.4375C7.22916 17.3333 7.04861 17.2639 6.89583 17.125C6.74305 16.9861 6.65277 16.8125 6.625 16.6042L6.375 14.6667C6.19444 14.5972 6.0243 14.5139 5.86458 14.4167C5.70486 14.3195 5.54861 14.2153 5.39583 14.1042L3.58333 14.8542C3.38889 14.9236 3.19444 14.9306 3 14.875C2.80555 14.8195 2.65277 14.7014 2.54166 14.5208L0.999996 11.8333C0.888885 11.6528 0.854163 11.4583 0.89583 11.25C0.937496 11.0417 1.04166 10.875 1.20833 10.75L2.77083 9.56251C2.75694 9.46528 2.75 9.37153 2.75 9.28126V8.71876C2.75 8.62848 2.75694 8.53473 2.77083 8.43751L1.20833 7.25001C1.04166 7.12501 0.937496 6.95834 0.89583 6.75001C0.854163 6.54167 0.888885 6.34723 0.999996 6.16667L2.54166 3.47917C2.63889 3.28473 2.78819 3.1632 2.98958 3.11459C3.19097 3.06598 3.38889 3.07639 3.58333 3.14584L5.39583 3.89584C5.54861 3.78473 5.70833 3.68056 5.875 3.58334C6.04166 3.48612 6.20833 3.40278 6.375 3.33334L6.625 1.39584C6.65277 1.18751 6.74305 1.01389 6.89583 0.875005C7.04861 0.736116 7.22916 0.666672 7.4375 0.666672H10.5625C10.7708 0.666672 10.9514 0.736116 11.1042 0.875005C11.2569 1.01389 11.3472 1.18751 11.375 1.39584L11.625 3.33334C11.8056 3.40278 11.9757 3.48612 12.1354 3.58334C12.2951 3.68056 12.4514 3.78473 12.6042 3.89584L14.4167 3.14584C14.6111 3.07639 14.8056 3.06945 15 3.12501C15.1944 3.18056 15.3472 3.29862 15.4583 3.47917L17 6.16667C17.1111 6.34723 17.1458 6.54167 17.1042 6.75001C17.0625 6.95834 16.9583 7.12501 16.7917 7.25001L15.2292 8.43751C15.2431 8.53473 15.25 8.62848 15.25 8.71876V9.28126C15.25 9.37153 15.2361 9.46528 15.2083 9.56251L16.7708 10.75C16.9375 10.875 17.0417 11.0417 17.0833 11.25C17.125 11.4583 17.0903 11.6528 16.9792 11.8333L15.4375 14.5C15.3264 14.6806 15.1701 14.8021 14.9687 14.8646C14.7674 14.9271 14.5694 14.9236 14.375 14.8542L12.6042 14.1042C12.4514 14.2153 12.2917 14.3195 12.125 14.4167C11.9583 14.5139 11.7917 14.5972 11.625 14.6667L11.375 16.6042C11.3472 16.8125 11.2569 16.9861 11.1042 17.125C10.9514 17.2639 10.7708 17.3333 10.5625 17.3333ZM9.04166 11.9167C9.84722 11.9167 10.5347 11.632 11.1042 11.0625C11.6736 10.4931 11.9583 9.80556 11.9583 9.00001C11.9583 8.19445 11.6736 7.50695 11.1042 6.93751C10.5347 6.36806 9.84722 6.08334 9.04166 6.08334C8.22222 6.08334 7.53125 6.36806 6.96875 6.93751C6.40625 7.50695 6.125 8.19445 6.125 9.00001C6.125 9.80556 6.40625 10.4931 6.96875 11.0625C7.53125 11.632 8.22222 11.9167 9.04166 11.9167ZM9.04166 10.25C8.69444 10.25 8.3993 10.1285 8.15625 9.88542C7.91319 9.64237 7.79166 9.34723 7.79166 9.00001C7.79166 8.65278 7.91319 8.35764 8.15625 8.11459C8.3993 7.87153 8.69444 7.75001 9.04166 7.75001C9.38889 7.75001 9.68402 7.87153 9.92708 8.11459C10.1701 8.35764 10.2917 8.65278 10.2917 9.00001C10.2917 9.34723 10.1701 9.64237 9.92708 9.88542C9.68402 10.1285 9.38889 10.25 9.04166 10.25ZM8.16666 15.6667H9.8125L10.1042 13.4583C10.5347 13.3472 10.934 13.184 11.3021 12.9688C11.6701 12.7535 12.0069 12.4931 12.3125 12.1875L14.375 13.0417L15.1875 11.625L13.3958 10.2708C13.4653 10.0764 13.5139 9.87153 13.5417 9.65626C13.5694 9.44098 13.5833 9.22223 13.5833 9.00001C13.5833 8.77778 13.5694 8.55903 13.5417 8.34376C13.5139 8.12848 13.4653 7.92362 13.3958 7.72917L15.1875 6.37501L14.375 4.95834L12.3125 5.83334C12.0069 5.51389 11.6701 5.24653 11.3021 5.03126C10.934 4.81598 10.5347 4.65278 10.1042 4.54167L9.83333 2.33334H8.1875L7.89583 4.54167C7.46527 4.65278 7.06597 4.81598 6.69791 5.03126C6.32986 5.24653 5.99305 5.50695 5.6875 5.81251L3.625 4.95834L2.8125 6.37501L4.60416 7.70834C4.53472 7.91667 4.48611 8.12501 4.45833 8.33334C4.43055 8.54167 4.41666 8.76389 4.41666 9.00001C4.41666 9.22223 4.43055 9.43751 4.45833 9.64584C4.48611 9.85417 4.53472 10.0625 4.60416 10.2708L2.8125 11.625L3.625 13.0417L5.6875 12.1667C5.99305 12.4861 6.32986 12.7535 6.69791 12.9688C7.06597 13.184 7.46527 13.3472 7.89583 13.4583L8.16666 15.6667Z"
          label=""
          action={() => {
            router.push("/profileSetting");
          }}
          iconRight={<ArrowRight />}
        />
        <ButtonParameters
          title="Privacy policy"
          icon="M2.00004 18.3333C1.54171 18.3333 1.14935 18.1701 0.822957 17.8437C0.496568 17.5174 0.333374 17.125 0.333374 16.6667V8.33333C0.333374 7.87499 0.496568 7.48263 0.822957 7.15624C1.14935 6.82986 1.54171 6.66666 2.00004 6.66666H2.83337V4.99999C2.83337 3.84722 3.23962 2.86458 4.05212 2.05208C4.86462 1.23958 5.84726 0.833328 7.00004 0.833328C8.15282 0.833328 9.13546 1.23958 9.94796 2.05208C10.7605 2.86458 11.1667 3.84722 11.1667 4.99999V6.66666H12C12.4584 6.66666 12.8507 6.82986 13.1771 7.15624C13.5035 7.48263 13.6667 7.87499 13.6667 8.33333V16.6667C13.6667 17.125 13.5035 17.5174 13.1771 17.8437C12.8507 18.1701 12.4584 18.3333 12 18.3333H2.00004ZM2.00004 16.6667H12V8.33333H2.00004V16.6667ZM7.00004 14.1667C7.45837 14.1667 7.85074 14.0035 8.17712 13.6771C8.50351 13.3507 8.66671 12.9583 8.66671 12.5C8.66671 12.0417 8.50351 11.6493 8.17712 11.3229C7.85074 10.9965 7.45837 10.8333 7.00004 10.8333C6.54171 10.8333 6.14935 10.9965 5.82296 11.3229C5.49657 11.6493 5.33337 12.0417 5.33337 12.5C5.33337 12.9583 5.49657 13.3507 5.82296 13.6771C6.14935 14.0035 6.54171 14.1667 7.00004 14.1667ZM4.50004 6.66666H9.50004V4.99999C9.50004 4.30555 9.25698 3.71527 8.77087 3.22916C8.28476 2.74305 7.69448 2.49999 7.00004 2.49999C6.3056 2.49999 5.71532 2.74305 5.22921 3.22916C4.7431 3.71527 4.50004 4.30555 4.50004 4.99999V6.66666Z"
          label=""
          action={() => {
            router.push("/privacyPolicy");
          }}
          iconRight={<ArrowRight />}
        />
        <ButtonParameters
          title="Help center"
          icon="M8.95829 14C9.24996 14 9.49649 13.8993 9.69788 13.6979C9.89927 13.4965 9.99996 13.25 9.99996 12.9583C9.99996 12.6667 9.89927 12.4201 9.69788 12.2187C9.49649 12.0174 9.24996 11.9167 8.95829 11.9167C8.66663 11.9167 8.4201 12.0174 8.21871 12.2187C8.01732 12.4201 7.91663 12.6667 7.91663 12.9583C7.91663 13.25 8.01732 13.4965 8.21871 13.6979C8.4201 13.8993 8.66663 14 8.95829 14ZM8.99996 17.3333C7.84718 17.3333 6.76385 17.1146 5.74996 16.6771C4.73607 16.2396 3.85413 15.6458 3.10413 14.8958C2.35413 14.1458 1.76038 13.2639 1.32288 12.25C0.885376 11.2361 0.666626 10.1528 0.666626 8.99999C0.666626 7.84721 0.885376 6.76388 1.32288 5.74999C1.76038 4.7361 2.35413 3.85416 3.10413 3.10416C3.85413 2.35416 4.73607 1.76041 5.74996 1.32291C6.76385 0.885406 7.84718 0.666656 8.99996 0.666656C10.1527 0.666656 11.2361 0.885406 12.25 1.32291C13.2638 1.76041 14.1458 2.35416 14.8958 3.10416C15.6458 3.85416 16.2395 4.7361 16.677 5.74999C17.1145 6.76388 17.3333 7.84721 17.3333 8.99999C17.3333 10.1528 17.1145 11.2361 16.677 12.25C16.2395 13.2639 15.6458 14.1458 14.8958 14.8958C14.1458 15.6458 13.2638 16.2396 12.25 16.6771C11.2361 17.1146 10.1527 17.3333 8.99996 17.3333ZM8.99996 15.6667C10.8611 15.6667 12.4375 15.0208 13.7291 13.7292C15.0208 12.4375 15.6666 10.8611 15.6666 8.99999C15.6666 7.13888 15.0208 5.56249 13.7291 4.27082C12.4375 2.97916 10.8611 2.33332 8.99996 2.33332C7.13885 2.33332 5.56246 2.97916 4.27079 4.27082C2.97913 5.56249 2.33329 7.13888 2.33329 8.99999C2.33329 10.8611 2.97913 12.4375 4.27079 13.7292C5.56246 15.0208 7.13885 15.6667 8.99996 15.6667ZM9.08329 5.41666C9.43052 5.41666 9.7326 5.52777 9.98954 5.74999C10.2465 5.97221 10.375 6.24999 10.375 6.58332C10.375 6.88888 10.2812 7.15971 10.0937 7.39582C9.90621 7.63193 9.6944 7.85416 9.45829 8.06249C9.13885 8.34027 8.8576 8.64582 8.61454 8.97916C8.37149 9.31249 8.24996 9.68749 8.24996 10.1042C8.24996 10.2986 8.32288 10.4618 8.46871 10.5937C8.61454 10.7257 8.78468 10.7917 8.97913 10.7917C9.18746 10.7917 9.36454 10.7222 9.51038 10.5833C9.65621 10.4444 9.74996 10.2708 9.79163 10.0625C9.84718 9.77082 9.97218 9.51041 10.1666 9.28124C10.3611 9.05207 10.5694 8.83332 10.7916 8.62499C11.1111 8.31943 11.3854 7.9861 11.6145 7.62499C11.8437 7.26388 11.9583 6.8611 11.9583 6.41666C11.9583 5.70832 11.6701 5.12846 11.0937 4.67707C10.5173 4.22568 9.84718 3.99999 9.08329 3.99999C8.55552 3.99999 8.05204 4.1111 7.57288 4.33332C7.09371 4.55555 6.72913 4.89582 6.47913 5.35416C6.3819 5.52082 6.35065 5.69791 6.38538 5.88541C6.4201 6.07291 6.51385 6.21527 6.66663 6.31249C6.86107 6.4236 7.06246 6.45832 7.27079 6.41666C7.47913 6.37499 7.65274 6.25693 7.79163 6.06249C7.9444 5.85416 8.13538 5.69443 8.36454 5.58332C8.59371 5.47221 8.83329 5.41666 9.08329 5.41666Z"
          label=""
          action={() => {
            router.push("/help");
          }}
          iconRight={<ArrowRight />}
        />
        <ButtonParameters
          title="About"
          icon="M8.99996 13.1667C9.23607 13.1667 9.43399 13.0868 9.59371 12.9271C9.75343 12.7674 9.83329 12.5694 9.83329 12.3333V8.99999C9.83329 8.76388 9.75343 8.56596 9.59371 8.40624C9.43399 8.24652 9.23607 8.16666 8.99996 8.16666C8.76385 8.16666 8.56593 8.24652 8.40621 8.40624C8.24649 8.56596 8.16663 8.76388 8.16663 8.99999V12.3333C8.16663 12.5694 8.24649 12.7674 8.40621 12.9271C8.56593 13.0868 8.76385 13.1667 8.99996 13.1667ZM8.99996 6.49999C9.23607 6.49999 9.43399 6.42013 9.59371 6.26041C9.75343 6.10068 9.83329 5.90277 9.83329 5.66666C9.83329 5.43055 9.75343 5.23263 9.59371 5.07291C9.43399 4.91318 9.23607 4.83332 8.99996 4.83332C8.76385 4.83332 8.56593 4.91318 8.40621 5.07291C8.24649 5.23263 8.16663 5.43055 8.16663 5.66666C8.16663 5.90277 8.24649 6.10068 8.40621 6.26041C8.56593 6.42013 8.76385 6.49999 8.99996 6.49999ZM8.99996 17.3333C7.84718 17.3333 6.76385 17.1146 5.74996 16.6771C4.73607 16.2396 3.85413 15.6458 3.10413 14.8958C2.35413 14.1458 1.76038 13.2639 1.32288 12.25C0.885376 11.2361 0.666626 10.1528 0.666626 8.99999C0.666626 7.84721 0.885376 6.76388 1.32288 5.74999C1.76038 4.7361 2.35413 3.85416 3.10413 3.10416C3.85413 2.35416 4.73607 1.76041 5.74996 1.32291C6.76385 0.885406 7.84718 0.666656 8.99996 0.666656C10.1527 0.666656 11.2361 0.885406 12.25 1.32291C13.2638 1.76041 14.1458 2.35416 14.8958 3.10416C15.6458 3.85416 16.2395 4.7361 16.677 5.74999C17.1145 6.76388 17.3333 7.84721 17.3333 8.99999C17.3333 10.1528 17.1145 11.2361 16.677 12.25C16.2395 13.2639 15.6458 14.1458 14.8958 14.8958C14.1458 15.6458 13.2638 16.2396 12.25 16.6771C11.2361 17.1146 10.1527 17.3333 8.99996 17.3333ZM8.99996 15.6667C10.8611 15.6667 12.4375 15.0208 13.7291 13.7292C15.0208 12.4375 15.6666 10.8611 15.6666 8.99999C15.6666 7.13888 15.0208 5.56249 13.7291 4.27082C12.4375 2.97916 10.8611 2.33332 8.99996 2.33332C7.13885 2.33332 5.56246 2.97916 4.27079 4.27082C2.97913 5.56249 2.33329 7.13888 2.33329 8.99999C2.33329 10.8611 2.97913 12.4375 4.27079 13.7292C5.56246 15.0208 7.13885 15.6667 8.99996 15.6667Z"
          label=""
          action={() => {
            router.push("/about");
          }}
          iconRight={<ArrowRight />}
        />
        <DividerProfile />
        <Buttonlogout onclick={handleLogout} />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    rowGap: 12,
    marginBottom: 20,
  },
  avatar: {
    flexShrink: 0,
    width: 80,
    height: 80,
    borderRadius: 9999,
    overflow: "hidden",
  },
  text: {
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 8,
  },
  ronaldRichards: {
    flexShrink: 0,
    width: 312,
    textAlign: "center",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28,
  },
  loremipsumdolorsitametconsecteturVivamuscongueodiorisustinciduntsed: {
    flexShrink: 0,
    width: 312,
    textAlign: "center",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
  },
  buttoneditprofile: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(225, 229, 235, 1)",
    borderRadius: 8,
  },
  textwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
  },
  _text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },

  navWrapper: {
    marginBottom: 24,
  },
  logoWrapper: {
    marginBottom: 24,
  },

  ctasignupwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    columnGap: 4,
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
});
