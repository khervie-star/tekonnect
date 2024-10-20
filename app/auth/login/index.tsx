import { SIGNUP_URL } from "@/config/url.config";
import { userLogin } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "@backpackapp-io/react-native-toast";
import { useSession } from "@/context/ctx";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

const Login = () => {
  const { signIn } = useSession();
  const [initialValues] = React.useState({
    email: "",
    password: ""
  });
  const onLogin = useMutation({
    mutationKey: ["login"],
    mutationFn: userLogin,
    onSuccess(data, variables, context) {
      console.log(data);
      toast.success("Login successful!");
      const userSession = {
        accessToken: data.token,
        user: data.user
      };
      signIn(userSession);

      if (data?.user?.hasProfile) {
        router.push("/app/(home)");
      } else {
        router.push("/user/create-profile");
      }
    },
    onError(error, variables, context) {
      console.log(error?.response?.data);
      toast.error(error?.response?.data?.message);
    }
  });
  return (
    <View className="flex-1 justify-center items-center px-5 bg-background-light dark:bg-background-dark">
      <Text className="text-4xl font-bold text-text-light dark:text-text-dark mb-2 font-satoshi-black">
        Welcome Back 👋
      </Text>
      <Text className="text-lg text-text-light dark:text-text-dark mb-8 font-satoshi-regular">
        Login to your account
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          onLogin.mutate(values);
          setSubmitting(false);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          isSubmitting,
          values: { email, password }
        }) => (
          <View className="w-full">
            <View className="mb-5">
              <TextInput
                placeholder="Email"
                placeholderTextColor="#888888"
                className="w-full h-12 border border-gray-400 rounded-full px-4 mb-1 bg-transparent border-input-border-light dark:border-input-border-dark text-text-light dark:text-text-dark font-satoshi-regular"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={email}
              />
              {touched.email && errors.email && (
                <Text className="text-red-500 font-satoshi-bold px-2">
                  {errors.email}
                </Text>
              )}
            </View>

            <View className="mb-5">
              <TextInput
                placeholder="Password"
                placeholderTextColor="#888888"
                className="w-full h-12 border border-gray-400 rounded-full px-4 mb-2 bg-transparent border-input-border-light dark:border-input-border-dark text-text-light dark:text-text-dark font-satoshi-regular"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={password}
              />
              {touched.password && errors.password && (
                <Text className="text-red-500 font-satoshi-bold px-2">
                  {errors.password}
                </Text>
              )}
            </View>

            <TouchableOpacity
              className="w-full h-12 justify-center items-center rounded-full mb-3 bg-primary-light dark:bg-primary-dark"
              disabled={onLogin.isPending}
              onPress={handleSubmit}>
              {onLogin.isPending ? (
                <ActivityIndicator size="small" color="#000000" />
              ) : (
                <Text className="text-white text-lg font-bold font-satoshi-bold">
                  Log In
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-center text-primary-light dark:text-primary-dark text-sm font-semibold mb-8 font-satoshi-bold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <Text className="text-sm text-text-light dark:text-text-dark mb-5 font-chillax-regular">
        or continue with
      </Text>

      <View className="flex-row justify-between w-full">
        <TouchableOpacity className="flex-row items-center justify-center py-3 px-5 rounded-lg flex-1 mr-2 border border-gray-400">
          <Image
            source={require("../../../assets/images/icons/google.png")}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center py-3 px-5 rounded-lg flex-1 mr-2 border border-gray-400">
          <Image
            source={require("../../../assets/images/icons/facebook.png")}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center mt-8">
        <Text className="text-text-light dark:text-text-dark text-sm font-satoshi-medium mr-1">
          Don't have an account?
        </Text>
        <Link href={SIGNUP_URL}>
          <Text className="text-primary-light dark:text-primary-dark text-sm font-semibold ml-1 font-satoshi-bold">
            Sign Up
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
