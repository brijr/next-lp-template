// Component Imports
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Quote from "@/components/Quote";
import Logos from "@/components/Logos";
import Text from "@/components/Text";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

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
        buttonColor={Colors.buttonColor}
      >
        Out of work due to a health issue? You may qualify for up to $3,300 in
        Social Security Disability Benefits. Fill out our quick form to get your
        free evaluation today.
      </Text>

      <Disclaimer>
        DISCLAIMER: This is a paid attorney/advocate advertisement. This website
        is a group advertisement and a fee is paid for by participating
        attorneys and advocates. The site is not an attorney referral service or
        prepaid legal services plan. The site is privately owned and is not
        affiliated with or endorsed by the Social Security Administration,
        Department of Education, or any other government agency. The promotion
        of this website is sponsored exclusively by Attorneys and Advocacy
        Groups who provide services applicable to this website for the public.
        Any information you submit to this website may not be protected by
        attorney-client privilege. An automated matching system will match each
        request with a member attorney/advocate representing the specific
        geography. A list of participating attorneys is available
        <a href="/">here</a>. To see a list of advertisers in New York,
        <a href="/">click here</a>. To see a list of advertisers in South
        Carolina,
        <a href="/">click here</a>. This website, it’s owners, affiliates, and
        partners do not claim to be affiliated with any Local, State, or Federal
        Government agencies, and our advertising materials, or methods are not
        affiliated or approved by the U.S. Government. This website assists
        people in obtaining services applicable to the content of this website
        by pre-qualifying our clients. We then match our clients with the
        applicable service provider or company within our company’s network of
        attorneys, and advocates.
      </Disclaimer>

      <Footer company="Benefits.com">
        Your <strong>Free Evaluation</strong> is only minutes away!
      </Footer>
    </main>
  );
}
