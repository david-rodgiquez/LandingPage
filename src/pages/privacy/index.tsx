import Head from "next/head";
import LayoutPage from "@/components/LayoutPage";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Privacy Notice</title>
      </Head>
      <LayoutPage>
        <main className="w-full mx-auto max-w-3xl mt-12 font-blender mb-28">
          <div className="flex justify-center items-center flex-col gap-4 mb-14">
            <h1 className="font-bold text-4xl text-[#1B283B] dark:text-white">
              Privacy Notice
            </h1>
            <div className="text-lg text-[#404854] dark:text-[#ABB3BF]">
              Last updated:{" "}
              {new Date("2023-07-17").toLocaleDateString(undefined, {
                dateStyle: "long",
              })}
            </div>
          </div>
          <div className="space-y-5 text-xl w-full page-content">
            <p>
              Rollup values the protection of your privacy and maintaining your
              trust in our services. This Privacy Notice is intended to address
              the global privacy regulations applicable to the activities and
              services we perform.
            </p>
            <p>
              Please be aware that data privacy laws can vary in the different
              jurisdictions where Rollup operates. In some jurisdictions other
              federal, state, and/or local laws (collectively “Local Laws”) may
              also apply.
            </p>
            <p>
              You may always contact us as described in the How to Contact Us
              section below if you have questions about this Privacy Notice, the
              processing of your Personal Data, or to exercise your rights as
              outlined below.
            </p>
            <h2>1. Scope</h2>
            <p>
              A reference to “Rollup,” “we,” “us” or “Company” is a reference to
              Rollup Systems, Inc. and its relevant subsidiaries and affiliates
              involved in the collection, use, sharing, or other processing of
              Personal Data.
            </p>
            <p>
              This Privacy Notice describes how Rollup uses and protects
              Personal Data collected for the following
              activities(“Activities”):
            </p>
            <ul>
              <li>
                visits to our websites and online apps including{" "}
                <Link href="https://www.rollup.ai">www.rollup.ai</Link>, and{" "}
                <Link href="https://www.app.rollup.ai">www.app.rollup.ai</Link>,
                and any other website on which this Privacy Notice appears
                (&ldquo;Sites&rdquo;);
              </li>
              <li>
                communications such as phone calls, text messages, emails,
                faxes, or video calls (“Communications”);
              </li>
              <li>
                participation in surveys or research initiatives (“Research”);
              </li>
              <li>
                visits to our branded social media pages (“Social Media”);
              </li>
              <li>
                and use of our products and services where we act as a
                controller of your Personal Data, including trial access to our
                Services and the Rollup Platform (“Direct Sales”).
              </li>
            </ul>
            <p>
              This Privacy Notice also explains our marketing practices
              generally. Please note, depending on how you interact or engage
              with us we may provide you with other privacy notices that include
              additional details about our information practices. For example,
              this Privacy Notice does not apply to job applicants and
              candidates who apply for employment with us, or to employees in
              the context of the employment relationship, which are subject to
              other notices.
            </p>
            <p>
              If you are a California resident, for more information about your
              privacy rights, please see the section of this Privacy Notice
              called “California Privacy Rights.”
            </p>
            <h3>1.1. Rollup Platform</h3>
            <p>
              This Privacy Notice may apply to portions of Rollup&apos;s
              software-as-a-service products where you engage with Rollup via
              our Sites, Services, or Direct Sales, including licensed software
              available through our platform via https://app.Rollup.ai, and any
              software, mobile applications, products, devices, or other
              services (collectively &ldquo;Rollup Platform&rdquo;).
            </p>
            <p>
              This Privacy Notice does not apply to the extent we process
              Personal Data while acting as a processor or service provider on
              behalf of a customer; under such circumstances we only process
              Personal Data on behalf of and in accordance with the instructions
              from our customer and any related data processing agreements,
              subscription service agreements, purchase orders, statements of
              work, or other applicable agreements.
            </p>
            <p>
              This Privacy Notice will apply to sections of the Rollup Platform
              not specifically identified within an applicable agreement
              including trial subscriptions.
            </p>
            <h2>2. Peronal Data</h2>
            <h3>2.1. What Is Personal Data</h3>
            <p>
              &ldquo;Personal Data&rdquo; means any data or information, in any
              form or medium, that on its own or when combined with other data
              could identify a particular individual, or any other data or
              information that constitutes personal data or personal information
              under applicable law. Personal Data does not include publicly
              available information, as defined by applicable law, de-identified
              information, or aggregated data.
            </p>
            <h3>2.2. What Personal Data We Collect</h3>
            <p>
              The following describes the categories of Personal Data we may
              collect from you.
            </p>
            <p>
              <strong>Personal Identifiers:</strong> such as name, alias,
              signature, postal address, phone numbers, unique personal
              identifier, online identifier, Internet Protocol (IP) address,
              email address, account name, national ID such as social security
              number, driver’s license number or state identification card
              number, and passport number.
            </p>
            <p>
              <strong>Commercial information:</strong> such as records of
              personal property, products or services purchased, obtained, or
              considered; and other purchasing or consuming histories. We may
              also collect customer record information, such as billing or
              service address, insurance policy number, contracting contact
              information, and similar account details or any combination of the
              previously mentioned.
            </p>
            <p>
              <strong>Protected Classifications:</strong> such as race, color,
              sex, sexual orientation, gender identity (including preferred
              pronouns), or other similar information.
            </p>
            <p>
              <strong>Sensitive Personal Data:</strong> such as social security
              number, driver’s license number, or passport number, union
              membership, and Protected Classification data as described above.
            </p>
            <p>
              <strong>Financial Information:</strong> such as payment history,
              bank account information, bank statements, tax information, credit
              or debit card number, other financial information for purposes of
              contracting, insurance, financing applications, or payments.
            </p>
            <p>
              <strong>
                Internet and Network Activity Data (“Usage Data”):
              </strong>{" "}
              such as information required to provide access to Rollup’s IT
              systems and networks, including IP addresses, log files, and login
              information, the type of Web browser you use; device type; your
              operating system; your web request; your Internet Service Provider
              and cookies; referring/exit pages and URLs; payload errors, the
              pages you view and how you interact with links; the time and
              duration of your visits to the Sites or use of the Rollup
              Platform.
            </p>
            <p>
              <strong>Geolocation Data:</strong> such as region, country, state,
              postal code, or location information we may derive from your IP
              address, event or visitor badging.
            </p>
            <p>
              <strong>Audio, Visual, and Similar Information:</strong> such as
              CCTV footage, photographs, and audio/video recordings (e.g.,
              recorded meetings and webinars, whether in person or virtual).
            </p>
            <p>
              <strong>Professional Information:</strong> such as professional or
              employment-related information such as current and former
              employer(s) and position(s), office location, business contact
              information, professional memberships.
            </p>
            <p>
              <strong>Educational Information:</strong> such as information
              about Rollup certifications or training, licensing, or education
              history.
            </p>
            <p>
              <strong>Inferences:</strong> such as inferences drawn from any of
              the information identified above, such as a summary of financial
              performance for financing and insurance as necessary as well as
              usage history of Rollup Sites and predictions about consumer
              preferences.
            </p>
            <h2>3. Source</h2>
            <h3>3.1. Where we Collect Personal Data</h3>
            <p>
              Most often, the Personal Data we collect about you is collected
              from you directly. In some cases, we may collect Personal Data
              automatically when you engage with Sites, Services, networks, and
              technology resources. Rollup may also collect Personal Data
              through our services providers, as further described below.
            </p>
            <h3>3.2. Categories of Sources:</h3>
            <p>
              <strong>You:</strong> We may collect Personal Data directly from
              you when you engage with the Sites, set up accounts, sign up for
              or engage in any of our Services, register for Events, contact
              customer support via telephone or email, engage with Social Media,
              engage with our Services, conduct Site Visits, or otherwise
              contact us.
            </p>
            <p>
              <strong>Other Sources:</strong> We may receive information about
              you from other sources, including your company, third parties,
              Rollup customers or authorized users, referrals, or visitors. To
              the extent permitted by applicable law, we may combine this data
              with information we already have about you. If others give us your
              Personal Data, we will only use that Personal Data for the purpose
              of providing, supporting, and improving Rollup services and other
              purposes that are compatible with the specific reason for which it
              was provided to us ( for example, as part of a referral or
              marketing campaign). Examples of other sources include:
            </p>
            <p>
              <strong>Affiliates or Subsidiaries:</strong> we may collect
              Personal Data about you from our affiliates or subsidiaries.
            </p>
            <p>
              <strong>Rollup Customers:</strong> we may collect Personal Data
              about you from our customers who you share your data with for
              purposes of the use of the Rollup Platform.
            </p>
            <p>
              <strong>Service Providers or Other Third Parties:</strong> we may
              collect Personal Data about you from Service Providers who provide
              services on our behalf, such as vendors that assist us with
              marketing efforts or that perform web hosting services, or from
              other third parties that provide data collection services.
            </p>
            <p>
              <strong>Publicly Available Sources:</strong> we may collect
              Personal Data about you from publicly available sources such as
              social media (e.g., LinkedIn).
            </p>
            <p>
              <strong>Automatically Collected Data:</strong> We automatically
              collect Usage Data regarding the actions you take on the Sites,
              Services, Direct Sales and the Rollup Platform from your browser,
              device, or network activity. This type of data helps us understand
              trends in our users’ needs so we can better consider new features
              or otherwise tailor the Sites and Rollup Platform.
            </p>
            <h2>4. Sharing Data</h2>
            <h3>4.1. Recipients with Whom We Disclose Personal Data</h3>
            <p>
              <strong>Affiliates and subsidiaries:</strong> We disclose your
              Personal Data with our global affiliates, subsidiaries, and agents
              of Rollup as may be necessary to manage our working relationship
              with you and our customers.
            </p>
            <p>
              <strong>Customers with whom you are affiliated:</strong> If you
              are granted access to our Services by a Rollup customer, we may
              disclose your Personal Data with the customer responsible for your
              access to our Services to the extent this is necessary for
              verifying accounts and activity; investigating suspicious
              activity; or enforcing our contract terms, terms of use, and
              policies.
            </p>
            <p>
              <strong>Third party networks and websites:</strong> With
              third-party social media networks, advertising networks, and
              websites, so that Rollup can market and advertise on third party
              platforms and websites.
            </p>
            <p>
              <strong>Service Providers:</strong> We may disclose your Personal
              Data with service providers that process Personal Data on behalf
              of Rollup to provide services (“Service Providers”). For example,
              we contract with Service Providers to provide certain services,
              such as hosting and maintenance, accounting, data analytics, and
              data storage and management, most of which are located in the
              United States. We only provide our Service Providers with the
              Personal Data necessary for them to perform these services on our
              behalf. Our Service Providers must generally agree to use
              reasonable security procedures and practices, appropriate to the
              nature of the information involved, to protect your Personal Data
              from unauthorized access, use, or disclosure. Service Providers
              are prohibited from using Personal Data other than as specified by
              Rollup.
            </p>
            <p>
              <strong>Contractors:</strong> We may make your Personal Data
              available to contracted entities and individuals for limited
              Rollup business purposes. Contractors are contractually subject to
              data protection terms and requirements
            </p>
            <p>
              <strong>Regulatory and Government Entities:</strong> We may
              disclose your Personal Data with administrative, law enforcement,
              and regulatory agencies; tax authorities; corporate registries;
              and other public agencies or authorities. Rollup will cooperate
              with government and law enforcement officials and private parties
              to enforce and comply with the law. We may disclose Personal Data
              and any other content and information about you to government or
              law enforcement officials or private parties, if necessary, in
              order to respond to legal requests (including court orders and
              subpoenas), to protect the safety, property, or rights of Rollup
              or of any third party, to prevent or stop any illegal, unethical,
              or legally actionable activity, or to comply with the law.
            </p>
            <p>
              <strong>Professional Services:</strong> In certain instances, we
              may disclose your Personal Data with professional advisers acting
              as service providers, processors, or joint controllers - including
              lawyers, bankers, auditors, and insurers who provide consultancy,
              banking, legal, insurance and accounting services, and to the
              extent we are legally obliged to disclose or have a legitimate
              interest in disclosing your Personal Data.
            </p>
            <p>
              <strong>Acquirer or Successor of Rollup:</strong> Potential or
              actual buyers (and their representatives, agents, and advisers) in
              connection with any proposed purchase, merger, acquisition,
              reorganization, or other similar corporate event.
            </p>
            <p>
              <strong>Partners:</strong> At your direction, we may disclose your
              Personal Data with integration partners, referral partners,
              reseller partners, and marketplace partners, with whom you
              interact via Rollup.
            </p>
            <p>
              <strong>Forums, Public Profiles, and Chat Rooms:</strong> Please
              be aware that whenever you disclose Personal Data on a publicly
              available page or any other public forum on the Sites or Rollup
              Platform, others may access that Personal Data. In addition,
              please remember that when you disclose Personal Data in any other
              communications with third parties, that information may be passed
              along or made public by others. This means that anyone with access
              to such Personal Data can potentially use it for any purpose,
              including sending unsolicited communications.
            </p>
            <h2>5. Using Data</h2>
            <h3>5.1. How We Use Your Personal Data</h3>
            <p>
              We collect Personal Data from you only where we have your consent
              to do so, where we need the Personal Data to perform a contract
              with you, or where the processing is in our legitimate interests
              and not overridden by your data protection interests or
              fundamental rights and freedoms. In some cases, we may also have a
              legal obligation to collect Personal Data from you or may
              otherwise need the Personal Data to protect your vital interests
              or those of another person.
            </p>
            <p>Our purposes for collection include:</p>
            <p>
              <strong>Auditing:</strong> Verifying data and auditing compliance
              with technical and organizational standards.
            </p>
            <p>
              <strong>Security:</strong> Helping to ensure network, physical,
              and information security.
            </p>
            <p>
              <strong>Improvements:</strong> Debugging and errors analysis,
              crash reporting, and analytics to improve existing intended
              functionality of Sites and Services.
            </p>
            <p>
              <strong>Notifications:</strong> Providing non-personalized
              advertising and notifications as part of interaction with Sites
              and Services, including the Rollup Platform.
            </p>
            <p>
              <strong>Provisioning the Activities:</strong> Performing or
              providing the Activities described above including maintaining or
              servicing accounts, profile management, providing customer
              service, processing or fulfilling orders and transactions,
              verifying information, processing payments, providing analytic
              services, providing storage, trial access, or providing functions.
            </p>
            <p>
              <strong>Marketing and Engagement:</strong> Providing advertising
              and marketing services, event and newsletter subscription
              services, surveys, contests, other special offers, and Rollup
              Stories (Customer highlighted stories and imagery).
            </p>
            <p>
              <strong>Internal Research and Development:</strong> Providing
              internal research for technological development and market
              analysis.
            </p>
            <p>
              <strong>Prevent Fraud:</strong> Detecting, investigating, and
              preventing fraudulent transactions and other illegal activities.
            </p>
            <p>
              <strong>Corporate Governance:</strong> Reporting and adherence to
              corporate governance requirements
            </p>
            <p>
              <strong>Legal Compliance:</strong> Providing legal or regulatory
              compliance, including reporting possible criminal acts or threats
              to public security to a competent authority, reporting to data
              protection authority, or applicable court order.
            </p>
            <p>
              We may also collect and use data for carrying out any other
              limited purpose described to you at the time the information was
              collected.
            </p>
            <h2>6. How We Use Usage Data</h2>
            <p>
              We may store Usage Data itself and such information may be
              included in databases owned and maintained by Rollup affiliates,
              agents, service providers, or third-party advertising and
              analytics providers. We may use such information and pool it with
              other information, for example, to track the total number of
              visitors to our Sites or authorized users of the Rollup Platform,
              or each page of our Sites, etc. We use this information to help us
              understand how people use the Sites and Rollup Platform, support
              our advertising and marketing efforts, and to enhance our
              Services.
            </p>
            <h2>7. Tracking Technologies</h2>
            <p>
              <strong>Cookies and Web Beacons:</strong> We may use cookies (a
              small text file placed on your computer to identify your computer
              and browser) and web beacons (a file placed on a website that
              monitors usage) to improve the experience of the Sites and Rollup
              Platform, such as pre-populating your username for easier login,
              to allow user-specific messaging, or to permit user-specific
              advertising.
            </p>
            <p>
              For more information on cookies, third-party cookies, and cookie
              management options, please see our Cookie Notice.
            </p>
            <p>
              You can remove persistent cookies and change your privacy
              preferences by following directions provided in your Internet
              browser’s “help” directory, or by clicking the Cookie Settings
              button above. However, certain features of the Sites or Rollup
              Platform may not work if you delete or disable cookies. Some of
              our service providers may use their own cookies and web beacons in
              connection with the services they perform on our behalf, as
              further explained below.
            </p>
            <p>
              We and our partners use similar technologies to analyze trends,
              administer the website, track users’ movements around the website,
              and to gather demographic information about our user base as a
              whole. Users can control the use of cookies at the individual
              browser level.
            </p>
            <p>
              <strong>Third-party Technologies:</strong> Third parties, such as
              ad servers, ad networks, and data exchanges (“Advertisers”) may
              place or recognize a unique cookie on your computer or use other
              technologies such as web beacons so that they can tailor their
              advertisements to your apparent interests and deliver those
              advertisements to you while you are on our Sites. In addition,
              Advertisers use technologies (such as cookies, pixels, and web
              beacons) to collect information about your browsing behavior on
              our Sites which they may match with information they have
              previously collected. Our Privacy Notice does not cover any use of
              information that Advertisers may collect from you or that you
              choose to provide to them. For information about how to opt out of
              receiving certain behavioral advertisements, please visit{" "}
              <Link href="http://optout.networkadvertising.org/?c=1">
                this website
              </Link>{" "}
              (or <Link href="http://www.youronlinechoices.eu/">this one</Link>{" "}
              if located in the European Union). Please note this does not opt
              you out of being served ads, you will continue to receive generic
              ads. You may also continue to receive targeted ads on other
              websites, from companies that do not participate in the above
              programs.
            </p>
            <p>
              <strong>Social Media Widgets:</strong> Our website includes social
              media features, such as the Facebook Like button, and widgets,
              such as the “Share this” button or interactive mini-programs that
              run on our website. These features may collect your Internet
              Protocol address, which page you are visiting on our website, and
              may set a cookie to enable the feature to function properly.
              Social media features and widgets are either hosted by a third
              party or hosted directly on our website. Your interactions with
              these features are governed by the privacy statement of the
              company providing the features.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect Personal Data from children under the
              age of 13. If we become aware that we have inadvertently received
              Personal Data from a child under the age of 13, we will delete
              such information from our records
            </p>
            <h2>9. Security</h2>
            <p>
              Rollup implements appropriate physical, operational, and technical
              safeguards designed to help protect your Personal Data from
              accidental or unlawful destruction, loss, alteration, unauthorized
              disclosure, or access to the Personal Data we collect or use. We
              also contractually require that our Service Providers protect such
              information from accidental or unlawful destruction, loss,
              alteration, unauthorized disclosure or access.
            </p>
            <p>
              Please be aware that despite our efforts, no data security
              measures can guarantee security. As a result, while we strive to
              protect Personal Data transmitted on or through the Sites, we
              cannot and do not guarantee the security of any information you
              transmit on or through the Sites. Devise-users are responsible for
              the protection of personal devices and password credentials.
            </p>
            <p>
              Rollup also engages in a responsible disclosure program. The
              program invites you to help bolster existing security measures and
              adapt to the ever-changing threat environment. If you become aware
              of a vulnerability, please see our Reporting a Vulnerability page.
              If you become aware of an error in disclosure of any Personal
              Data, you may also email privacy@Rollup.ai.
            </p>
            <h2>10. Data Retention</h2>
            <p>
              We will retain your information for as long as we have an ongoing
              business relationship with you or the business needs to do so (for
              example: to comply with applicable law, tax requirements, or
              enforce our agreements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              Personal Data, we may either delete or de-identify it, or, if this
              is not possible (for example, because your Personal Data has been
              stored in backup archives), then we will securely store your
              Personal Data and isolate it from any further processing until
              deletion is possible. If we collect or use de-identified
              information, we will not attempt to re-identify it.
            </p>

            <h3>10.1. Where We Process and Store Your Personal Data</h3>
            <p>
              From time to time, for the purposes described in this Privacy
              Notice, your Personal Data may be processed by us and our vendors
              outside your home jurisdiction, including in the U.S. and other
              countries. These countries may have data protection laws that are
              different from the laws of your country. Rollup only transfers
              Personal Data to another country, including to its subsidiaries
              and other affiliates, in accordance with applicable data privacy
              laws, and provided there is adequate protection in place for the
              data. The relevant Data Controllers with respect to Rollup’s
              Personal Data processing activities
            </p>
            <p>
              We have taken reasonable measures to require that your Personal
              Data will remain protected in accordance with this Privacy Notice
              and applicable regulations. For more information about the
              subprocessors related to the Rollup Platform, please see our
              subprocessor list at https://www.Rollup.com/legal/subprocessors
            </p>
            <h3>10.2. Third Parties/Links</h3>
            <p>
              Our Sites and Rollup Platform may contain links or integrate with
              other websites and online services or allow others to send you
              such links. Rollup is not responsible or liable for any damage or
              loss related to your use of any third-party website or online
              service, including through the Rollup Marketplace. You should
              always read the terms and conditions and Privacy Notice of a
              third-party website or online service before using it, whether
              directly or in connection with your use of the Sites or the Rollup
              Platform.
            </p>
            <h3>10.3. Your Rights</h3>
            <p>
              You may opt not to disclose Personal Data to us, but keep in mind
              some Personal Data may be needed to register with us or to use
              some of our features. If we have collected and processed your
              Personal Data with your consent, you can withdraw your consent at
              any time. Withdrawing your consent will not affect the lawfulness
              of any processing we conducted prior to your withdrawal, nor will
              it affect the processing of your Personal Data conducted in
              reliance on lawful processing grounds other than consent.
            </p>
            <p>
              Please note that we may still use any aggregated and de-identified
              Personal Data that does not identify any individual and we may
              also retain and use your Personal Data As necessary to comply with
              our legal obligations, resolve disputes, or enforce our
              agreements.
            </p>
            <h2>11. Your Data Rights</h2>
            <p>
              You have several rights with respect to your Personal Data, as
              further described in this section.
            </p>
            <h3>11.1. How to Update and Access Your Personal Data</h3>
            <p>
              It is important that the Personal Data contained in our records is
              both accurate and current. We may offer various self-help
              functions within our Site, tools, and Services that will allow you
              to update your Personal Data in our records. If we have Personal
              Data that you cannot access via these self-service systems, then
              you may make a request through the Privacy Team by email at
              privacy@Rollup.com.
            </p>
            <p>
              Depending on applicable Local Laws, you may have additional rights
              with regard to your Personal Data. Below is an explanation of your
              privacy rights. Please note, these rights do not conflict with any
              rights you may have under the applicable Local Law. Rollup will
              not discriminate against you for exercising any of your privacy
              rights.
            </p>
            <h3>11.2. Data Subject Rights</h3>
            <p>
              Subject to conditions set forth in applicable data protection
              legislation, you may have the following rights:
            </p>
            <ul>
              <li>
                <strong>Right to Know/Be Informed</strong> - You have the right
                to know and understand what Personal data we collect and how we
                process it.
              </li>
              <li>
                <strong>Right to Access</strong> - You have the right to request
                access to any Personal Data concerning you, subject to limited
                exceptions that may be prescribed by applicable law.
              </li>
              <li>
                <strong>Right to Correct (Rectification)</strong> - Rollup aims
                to ensure that all of your Personal Data is correct. You are
                entitled to have any inadequate, incomplete or incorrect
                Personal Data corrected (that is, rectified).
              </li>
              <li>
                <strong>Right to Withdraw Consent</strong> - In the event your
                Personal Data is processed on the basis of your consent, you
                have the right to withdraw consent at any time, without
                affecting the lawfulness of processing based on consent before
                its withdrawal.
              </li>
              <li>
                <strong>Right to Data Portability</strong> - Where we rely upon
                your consent as the legal basis for processing, or the fact that
                the processing is necessary to perform a contract to which you
                are party or to take steps at your request prior to entering a
                contract, and the Personal Data is processed by automated means,
                you have the right to receive all such Personal Data which you
                have provided to us in a structured, commonly used and
                machine-readable format, and also to require us to transmit it
                to another controller where this is technically feasible.
              </li>
              <li>
                <strong>Right to Erasure</strong> - You are entitled to have
                your Personal Data erased under specific circumstances, such as
                where you have withdrawn your consent, where you object to
                processing based on legitimate interests and we have no
                overriding legitimate grounds or where Personal Data is
                unlawfully processed.
              </li>
              <li>
                <strong>
                  Right to Restriction of Processing (Limit Use and Disclosure)
                </strong>{" "}
                - You have the right to restrict our processing of your Personal
                Data under the below circumstances. Where your Personal Data is
                subject to restriction we will only process it with your consent
                or for the establishment, exercise or defense of legal claims.
                This may occur:
              </li>
              <ul>
                <li>
                  If you contest the accuracy of the Personal Data, until we
                  have taken sufficient steps to correct or verify its accuracy;
                </li>
                <li>
                  where the processing is unlawful but you do not want us to
                  erase the Personal Data;
                </li>
                <li>
                  where we no longer need your Personal Data for the purposes of
                  the processing, but you require such Personal Data for the
                  establishment, exercise or defense of legal claims; or
                </li>
                <li>
                  where you have objected to processing justified on legitimate
                  interest grounds (see below), pending verification as to
                  whether we have compelling legitimate grounds to continue
                  processing.
                </li>
              </ul>
              <li>
                <strong>
                  Right to object to processing justified on legitimate interest
                  grounds
                </strong>{" "}
                - Where we are relying upon legitimate interest to process
                Personal Data, you may have the right to object to that
                processing based on grounds related to your particular
                situation. If you object, we must stop that processing unless we
                can demonstrate compelling legitimate grounds for the processing
                that override your interests, rights and freedoms, or we need to
                process the Personal Data for the establishment, exercise or
                defense of legal claims. Where we rely upon legitimate interest
                as a basis for processing, we believe that we can demonstrate
                such compelling legitimate grounds, but we will consider each
                case on an individual basis.
              </li>
              <li>
                <strong>Right to lodge a complaint</strong> - You may lodge a
                complaint with the supervisory authority of your habitual
                residence, place of work or place of alleged infringement.
                Contact details for data protection authorities in the EEA,
                Switzerland, and certain other countries are available{" "}
                <Link href="https://edpb.europa.eu/about-edpb/board/members_en">
                  here
                </Link>
                .
              </li>
            </ul>
            <h3>11.3. Exercise your Rights</h3>
            <p>
              To obtain further information regarding your rights, to exercise
              any of your rights (other than to lodge a complaint), or to ask
              any questions regarding the processing of your Personal Data,
              please contact the Privacy Team by email at privacy@Rollup.com.
            </p>
            <p>
              Only you or someone legally authorized to act on your behalf may
              make a verifiable consumer request related to your Personal Data.
              You may also make a verifiable request on behalf of your minor
              child. You may designate someone as an authorized agent to submit
              requests and act on your behalf. We will respond to all requests
              in accordance with applicable laws. We may ask you for information
              to verify your identity and evaluate your privacy rights request.
            </p>
            <p>
              <strong>Marketing Communications:</strong> You can opt out of
              receiving promotional or marketing communications from us at any
              time by using the unsubscribe link in the email communications we
              send or by filling out this Marketing Opt-Out Form. To opt out of
              non-email forms of marketing (such as postal marketing or
              telemarketing), please contact us using the contact details
              provided in the How to Contact Us section below. If you set up an
              account on our Sites, we will still send you non-promotional
              communications like service-related emails.
            </p>
            <p>
              If you want your phone number to be added to our internal
              Do-Not-Call telemarketing register, please contact us by using the
              information in the How to Contact Us section below. Please include
              your first name, last name, company and the phone number you wish
              to add to our Do-Not-Call register. Alternatively, you can always
              let us know during a telemarketing call that you do not want to be
              called again for marketing purposes.
            </p>
            <h3>
              11.4. Your rights where you have been granted access to the Rollup
              Platform by a customer
            </h3>
            <p>
              As described above, we may also process Personal Data submitted by
              or for a customer. To this end, unless stated otherwise in this
              Privacy Notice or in a separate disclosure, we process such
              Personal Data as a processor/service provider on behalf of our
              customers. If your data has been submitted to us in our role as a
              processor/service provider and you wish to exercise any rights you
              may have under applicable data protection laws, please directly
              inquire with the customer that granted you access to the Rollup
              Platform. Because we may only access a customer’s data upon their
              instructions, if you wish to make your request directly to us,
              please provide us with the name of the Rollup customer(s) and
              project name(s) relevant to your request. We will refer your
              request to that customer, and will support them as needed in
              responding to your request.
            </p>
            <h2>12. Privacy Notice Changes</h2>
            <p>
              This Privacy Notice is reviewed and updated periodically to ensure
              it accurately describes our practices and procedures. We may also
              make updates or changes to this Privacy Notice because of changes
              in applicable laws or regulations. Any changes made to this
              Privacy Notice are effective as of the &ldquo;Last Updated&rdquo;
              reference above. If necessary, we may take additional measures to
              inform you of changes, such as by posting a prominent notice on
              our Site.
            </p>
            <h2>13. How To Contact Us</h2>
            <p>
              If you have questions or concerns about our use of your Personal
              Data, please contact us at:
            </p>
            <p>Rollup Systems, Inc. 1710 Rose St Berkeley, CA, 94703</p>
            <p>privacy@Rollup.com</p>
            <h2>14. California Privacy Rights</h2>
            <p>
              This section of the notice provides additional information for
              California residents and describes our information practices
              pursuant to the California Consumer Privacy Act 2018, as amended
              by the California Privacy Rights Act 2020, and its implementing
              regulations (&ldquo;CCPA&rdquo;).
            </p>
            <p>
              The CCPA provides California residents with certain rights
              regarding their Personal Data. Please note, these rights only
              apply to Personal Data we collect and process under this Privacy
              Notice as a business/controller. For Personal Data we process on
              behalf of our customers in our capacity as a service
              provider/processor, please submit your request directly to the
              customer with whom you have a relationship, and we will provide
              reasonable assistance to that business client as necessary to
              enable them to respond to your requests to exercise your privacy
              rights. In general, California residents, including our customer’s
              employees who reside in California, have the following rights with
              respect to their Personal Data, subject to certain exceptions:
            </p>
            <p>
              <strong>Right to know/access:</strong> you have the right to
              request (subject to certain exemptions and exceptions):
            </p>
            <ul>
              <li>The categories or Personal Data we collected about you;</li>
              <li>
                The categories of sources from which the Personal Data is
                collected;
              </li>
              <li>
                Our business or commercial purposes for collecting, selling, or
                sharing Personal Data;
              </li>
              <li>
                The categories of third parties to whom we have disclosed
                Personal Data; and
              </li>
              <li>
                A copy of the specific pieces of Personal Data we have collected
                about you.
              </li>
            </ul>
            <p>
              <strong>Right to delete:</strong> you have the right to request
              that we delete any of your Personal Data that we collected from
              you and retained, subject to certain exceptions. Once we receive
              and confirm your Verifiable Consumer Request we will delete (and
              direct our service providers to delete) your Personal Data from
              our records, unless an exception applies;
            </p>
            <p>
              <strong>Right to correct:</strong> you have the right to correct
              inaccurate information;
            </p>
            <p>
              <strong>Right to opt-out of sale and sharing:</strong> you have
              the right to opt-out of the “sale” or “sharing” of personal
              information, as these terms are defined under the CCPA. Rollup
              does not sell Personal Data in the traditional sense (i.e., for
              money). However, the CCPA provides a broad understanding of “sale”
              and “sharing” which can include disclosing Personal Data for
              other, non-monetary benefits such as third-party data analytics
              and third-party advertising. To exercise your “opt out of sale”
              rights please click the Do Not Sell or Share My Personal
              Information link at the bottom of our Site, fill out the Rollup
              Privacy Rights Request Web Form, or contact us at
              privacy@Rollup.com. You also have the right to opt-out of “sales”
              and “sharing” of your personal information through the use of an
              opt-out preference signal. If our Site detects that your browser
              or device is transmitting an opt-out preference signal from a
              “global privacy control” or “GPC” signal, we will opt that browser
              or device out of cookies on our Website that result in a “sale” or
              “sharing” of your personal information. To learn more about GPC
              signals and implementation, please see
              https://globalprivacycontrol.org. If you come to our Site from a
              different device or from a different browser on the same device,
              you will need to opt-out, or use an opt-out preference signal, for
              that browser and/or device as well. We do not sell or share
              Sensitive Personal Information, nor do we sell or share any
              Personal Data about individuals who we know are under sixteen (16)
              years old.
            </p>
            <p>
              <strong>Right to limit use/disclosure:</strong> you may have the
              right to limit the use and disclosure of Sensitive Personal
              Information.
            </p>
            <p>
              <strong>Right to non-discrimination:</strong> we will not
              discriminate against you for exercising any of the rights
              described in this section.
            </p>
            <p>
              If you are a California resident and would like to exercise your
              CCPA rights, you may do so via any of the methods described below:
            </p>

            <p>Email us at privacy@Rollup.com</p>
            <p>
              Before responding to your request, we must first verify your
              identity using the Personal Data you recently provided to us. You
              must provide us with our name, street address, city, state, zip
              code and an e-mail address or phone number. We will take steps to
              verify your request by matching the Personal Data provided by you
              with the information we have in our records. In some cases, we may
              request additional information in order to verify your identity,
              or where necessary to process your request. If we are unable to
              verify your identity after a good faith attempt, we may deny the
              request and, if so, will explain the basis for the denial.
            </p>
            <p>
              You may designate someone as an authorized agent to submit
              requests and act on your behalf. Authorized agents will be
              required to provide proof of their authorization in their first
              communication with us, and we may also require that the relevant
              consumer directly verify their identity and the authority of the
              authorized agent.
            </p>
            <h2>15. California Shine the Light Law</h2>
            <p>
              Rollup does not disclose Personal Data to third parties for the
              third-parties’ direct marketing purposes, under Cal. Civ. Code
              §1798.83(d).
            </p>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
