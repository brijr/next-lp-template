// Component Imports
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Quote from "@/components/Quote";
import Logos from "@/components/Logos";
import Text from "@/components/Text";

// To change the font family go to Layout.tsx and change the font-family of the body (Default is Inter)

// Set the Logo for the Website
const Logo = "https://www.benefits.com/static/images/home/logo-top.svg";

// Set the Colors of the bg and button
const Colors = {
  background: "#1E40AF",
  buttonColor: "#1E40AF",
};

export default function Home() {
  return (
    <main>
      <Header logo={Logo} />

      <Hero
        title="We need a few pieces of information on your case."
        bgColor={Colors.background}
      >
        To find out if you qualify for our help in obtaining up to $3,627/month
        in disability benefits, fill out the form below in its entirety and
        submit by <strong>7PM MST</strong> on{" "}
        <strong id="todayDate">May 26th, 2023</strong>.*
      </Hero>

      <Section>{/* Form will go here */}</Section>

      <Quote
        quote="Thank you so much for helping me! I've given your name to a few people who are also trying to get disability. You guys were wonderful."
        author="Rose F."
        location="Madison, Wisconsin"
      ></Quote>

      <Logos></Logos>

      <Text
        heading="Our advocates have helped thousands of people just like you through the disability approval process."
        btnColor={Colors.buttonColor}
      >
        Out of work due to a health issue? You may qualify for up to $3,300 in
        Social Security Disability Benefits. Fill out our quick form to get your
        free evaluation today.
      </Text>
    </main>
  );
}
