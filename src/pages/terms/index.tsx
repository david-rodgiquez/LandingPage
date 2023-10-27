import Head from "next/head";
import LayoutPage from "@/components/LayoutPage";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <LayoutPage>
        <main className="w-full mx-auto max-w-3xl mt-12 font-blender mb-28">
          <div className="flex justify-center items-center flex-col gap-4 mb-14">
            <h1 className="font-bold text-4xl text-[#1B283B] dark:text-white">
              Terms of Service
            </h1>
            <div className="text-lg text-[#404854] dark:text-[#ABB3BF]">
              Last updated: September 15, 2023
              {/* Last updated:{" "} */}
              {/* {new Date().toLocaleDateString(undefined, { dateStyle: "long" })} */}
            </div>
          </div>
          <div className="space-y-5 text-xl w-full page-content">
            <p>
              The https://app.Rollup.ai, and https://www.Rollup.ai, websites,
              and any other website on which these USER Terms of Service appear,
              and any software, mobile applications, products, devices, or other
              services offered by Rollup and other services offered through
              third parties integrating Rollup functionality (collectively,
              “Offerings”), are made available by Rollup Systems, Inc., (Rollup,
              its subsidiaries, and affiliates are collectively, “we”, “us”,
              “our”, or “Rollup“). You may access and use the Offerings only
              under the following User Terms of Service, including any
              product-specific, supplemental or other terms referencing or
              linked to these User Terms of Service (“Special Terms”). These
              User Terms of Service and any applicable Special Terms are
              collectively the “Terms”. If there is any conflict between these
              User Terms of Service and the Special Terms, the Special Terms
              will control in relation to their subject matter.
            </p>
            <p>
              These Terms apply to you and your use of the Offerings. By
              registering, accessing, or using the Offerings you agree to these
              Terms, Rollup&apos;s Privacy Notice, Rollup&apos;s Copyright
              Notice (posted below), and any other policies identified herein,
              which are incorporated by reference into these Terms. If you are
              using the Offerings on behalf of your employer or a legal entity,
              you represent and warrant that you are authorized to bind your
              employer or that entity to these Terms. In addition, these Terms
              apply to and are binding on anyone who is authorized by the
              employer or legal entity to access or use the Offerings. Except
              for Paid Offerings, if you wish to terminate these Terms at any
              time you can do so by closing your account and no longer accessing
              or using the Offerings.
            </p>
            <p>
              If your use of a given Paid Offering (as defined below) is
              governed by a separate Subscription and Services Agreement, Master
              Services Agreement, or similar agreement entered into with Rollup,
              that agreement will control to the extent that there is any
              conflict with these Terms with respect to that given Paid Offering
              and you agree to be bound by said agreement by using the Offering.
            </p>
            <h2>1. Using the Offerings</h2>
            <h3>1.1. Eligibility</h3>
            <p>
              To use the Offerings, you agree that you: (1) must be at least 16
              years old, or older if required by applicable law for Rollup to
              lawfully provide the Offerings to you without parental consent
              (including use of your Personal Data as defined in Rollup&apos;s
              Data Processing Addendum); (2) will only have one registered
              account; (3) are not already restricted by Rollup from using the
              Offerings. Creating an account with false information is a
              violation of these Terms, including registering accounts on behalf
              of others.
            </p>
            <h3>1.2. Registration and Your Account</h3>
            <p>
              Certain Offerings require registration. For those Offerings, you
              must provide complete, accurate, and truthful information and
              update the registration information promptly if there are any
              changes. Registered users are responsible for: (1) maintaining the
              confidentiality of their login credentials, and (2) for all usage
              and activity that occur under their account including use or
              activity by any third party they authorize or invite to access,
              use or connect to their account; and (3) all statements made or
              materials posted under their account, including liability for harm
              caused by such statements or materials. You may not assign or
              transfer your account to any other person or entity without
              Rollup&apos;s prior written permission. You agree that Rollup is
              not responsible for third-party access to your account that
              results from the theft or misappropriation of your login
              credentials.
            </p>
            <h3>1.3. Paid Offerings</h3>
            <p>
              If there is a fee to use an Offering (a “Paid Offering”), the fee
              will be disclosed prior to registration and charged as outlined in
              an applicable order form. Paid Offerings are subject to a separate
              agreement with Rollup.
            </p>
            <h3>1.4. Notices and Messaging</h3>
            <p>
              You understand that by registering with the Offerings, you may
              receive regular updates, marketing, and other communications
              regarding new or existing Rollup products and services. You agree
              that Rollup will provide notices and messages to you in the
              following ways: (1) within the Offerings, or (2) sent to the
              contact information you provide us (e.g., email, mobile number,
              physical address). You may opt out of receiving promotional or
              marketing communications from us at any time by using the
              unsubscribe link in the email communications we send or by
              contacting us and expressly indicating your desire to so opt out.
            </p>
            <h3>1.5. Linking to the Offerings</h3>
            <p>You may not provide links to the Offerings.</p>
            <h2>2. Licenses and Restrictions</h2>
            <h3>2.1. Limited License</h3>
            <p>
              As an Offering user, you are granted a non-exclusive,
              non-transferable, non-sublicensable, revocable, limited license to
              access and use the Offerings per these Terms. Rollup may terminate
              this license at any time for any reason. Certain Offerings require
              login information as described below. Notwithstanding the license
              in this section, certain Offerings require you to register to
              access and use certain of the Offerings&apos; features.
            </p>
            <h3>2.2. Limitations</h3>
            <p>
              Any unauthorized use of the Offerings is prohibited. You may not
              use the Offerings to:
            </p>
            <ol>
              <li>
                Copy, modify, reproduce, republish, distribute, display, or
                transmit for commercial, non-profit, or public purposes all or
                any portion of the Offerings or any information obtained from
                the Offerings, either directly or through a third party.
              </li>
              <li>
                Extract, decompile, reverse engineer, disassemble, or create
                derivative works from or competitive products of the Offerings.
              </li>

              <li>
                Create a false identity, misrepresent your identity, create a
                profile for anyone other than yourself, or use or attempt to use
                another&apos;s account;
              </li>
              <li>
                Disclose information that you do not have the consent to
                disclose (such as confidential information of others, including
                your employer);
              </li>
              <li>
                Determine the Offerings&apos; architecture or extract data or
                information about usage, or individual identities of other users
                of the Offerings via use of any network monitoring or discovery
                software or otherwise.
              </li>
              <li>
                Override any security feature or bypass or circumvent any access
                controls or use limits of the Offerings;
              </li>
              <li>
                Rent, lease, loan, trade, sell/resell, or otherwise monetize the
                Offerings or related data or access to the same, without
                Rollup&apos;s consent;
              </li>
              <li>
                Monitor, copy, scan, review, index, mirror, ping, or validate
                the Offerings via robot, spider, other automatic software or
                device, process, approach, or methodology, manual or otherwise
                (methods such as web scraping, harvesting, data extraction, data
                validation, or verification are prohibited).
              </li>
              <li>
                Transmit any computer virus, worm, defect, trojan horse, or any
                other item of a destructive nature, or to upload any virus or
                malicious code.
              </li>
              <li>
                Transmit any false, misleading, fraudulent, or illegal
                communications, information, or data.
              </li>
              <li>
                Phish, spoof, commit illegal or fraudulent activity, or violate
                applicable laws or regulations.
              </li>
              <li>
                Deep-link to our Offerings for any purpose other than to promote
                your profile on the Offerings, without Rollup&apos;s consent;
              </li>
              <li>
                Use bots or other automated methods to access the Offerings, add
                or download contacts, or send or redirect messages;
              </li>
              <li>
                Monitor the Offerings&apos; availability, performance, or
                functionality for any competitive purpose;
              </li>
              <li>
                Damage, interfere, disable, or impair the operation of, or place
                an unreasonable load on, the Offerings (e.g., spam, denial of
                service attack, viruses, gaming algorithms);
              </li>
              <li>
                Violate the intellectual property rights of others, including
                copyrights, patents, trademarks, trade secrets, or other
                proprietary rights;
              </li>
              <li>
                Violate Rollup&apos;s intellectual property or other rights,
                including using the word “Rollup” or its logos in any business
                name, email, or URL except as provided in the Trademark Use
                Guidelines;
              </li>
              <li>
                Imply or state that you are affiliated with or endorsed by
                Rollup without Rollup&apos;s express consent;
              </li>
              <li>Access unauthorized information;</li>
              <li>
                Solicit information from minors or harm or threaten to harm
                minors;
              </li>
              <li>
                Attack, threaten violence, stalk, harass, incite, harm, or
                intimidate any other user, person, or organization, or engage in
                any other threatening behavior;
              </li>
              <li>
                Transmit, store, or post any material that is abusive,
                harassing, tortious, defamatory, derogatory, vulgar,
                pornographic, obscene, libelous, fraudulent, invasive of
                another&apos;s privacy, hateful, or racially, ethnically, or
                otherwise objectionable;
              </li>
              <li>
                Transmit any unsolicited or unauthorized advertising,
                promotional materials, junk mail, spam, chain letters, contests,
                pyramid schemes, surveys, or any other form of solicitation or
                mass messaging, whether commercial in nature or not; or
              </li>
              <li>
                Export or re-export the Offerings or any portion thereof in
                violation of any applicable export control laws and regulations.
              </li>
            </ol>
            <p>
              You acknowledge that we have the right to monitor your access or
              use of the Offerings for the purpose of operating and improving
              the Offerings (including without limitation for security analysis,
              fraud prevention, risk assessment, troubleshooting and customer
              support purposes), to ensure your compliance with these Terms and
              to comply with applicable law or the order or requirement of a
              court, consent decree, administrative agency, or other
              governmental body.
            </p>
            <p>
              If Rollup believes, in its sole discretion, that you may violate,
              have violated or attempted to violate any of these Terms or any
              policies referenced herein, your use and access to the Offerings
              may be limited, temporarily revoked, or permanently revoked and
              your Content may be modified or removed from the Offerings in
              Rollup&apos;s sole discretion without notice to you.
            </p>
            <h2>3. Rollup Intellectual Property Rights</h2>
            <p>
              Except as expressly provided in these Terms, nothing contained
              herein will be construed as conferring any license or right, by
              implication, estoppel, or otherwise, under copyright or other
              intellectual property rights. You agree that the Offerings are
              protected by copyrights, trademarks, service marks, patents, or
              other proprietary rights and laws. Rollup, the Rollup logo, and
              all other Rollup trademarks, service marks, product names, and
              trade names of Rollup appearing on or in conjunction with the
              Offerings are owned by Rollup. Rollup does not grant you the right
              to use or display any trademark, service mark, product name, trade
              name, or logo appearing on the Offerings without Rollup&apos;s
              prior written consent.
            </p>
            <h2>4. License of Your Content to Rollup</h2>
            <p>
              The Offerings allow you to publish content that is only viewable
              by you or by your users with appropriate access permissions
              (“Content”). You hereby grant (or warrant that the owner of such
              rights has expressly granted) Rollup and its subprocessors a
              worldwide right and license to access, host, display, process,
              analyze, transmit, reproduce, and otherwise utilize Content for
              the purposes of providing and improving the Offerings.
            </p>
            <h3>4.1. Usage Data</h3>
            <p>
              Rollup may collect, use, share, and otherwise process usage
              information or data related to or derived from the access or use
              of the Offerings (“Usage Data”). Examples of Usage Data include
              information or data on user visits, user activity, and numbers and
              types of clicks or impressions, as well as statistical,
              functional, behavioral, or other information or data based on or
              derived from such access or use. Except where you have expressly
              provided your written consent, Rollup will only disclose Usage
              Data if such data does not contain Personal Data or any Content.
            </p>
            <h3>4.2. Feedback and Suggestions</h3>
            <p>
              By submitting suggestions or other feedback regarding the
              Offerings to Rollup, you agree that Rollup can use and publicly
              share such feedback (although it does not have to) for any purpose
              without compensation or attribution to you. You agree that you
              will have no recourse against Rollup for any alleged or actual
              infringement or misappropriation of any proprietary right in any
              feedback or suggestion you provide to Rollup.
            </p>
            <h2>5. Relationship of Rollup and You</h2>
            <p>
              You are an independent third party to Rollup and nothing in these
              Terms will create or represent that there is any partnership,
              joint venture, agency, franchise, sales relationship, or
              employment relationship between you and Rollup. Rollup may
              contract with third party service providers to provide the
              Services to you. These User Terms of Services shall also apply to
              such third parties.
            </p>
            <h2>6. Errors and Corrections</h2>
            <p>
              Rollup does not represent or warrant that the Offerings will be
              error-free, free of viruses or other harmful components, that
              defects will be corrected, or that they will always be accessible.
              Rollup does not warrant or represent that content or information
              available on or through the Offerings will be correct, accurate,
              timely, or otherwise reliable.
            </p>
            <p>
              Except as separately agreed with you in writing, Rollup may: (1)
              change, suspend or discontinue any of our Offerings; and/or (2)
              modify the prices of Paid Offerings effective prospectively upon
              reasonable notice to the extent allowed under the law. Except as
              required by law, Rollup has no obligation to retain or provide you
              with copies of your Content.
            </p>
            <h2>7. Third-Party Content and Links</h2>
            <p>
              The Offerings may host third-party content or information
              (“Third-Party Content”) or may include links to other websites or
              applications (“Third-Party Services”). Rollup does not control or
              endorse any Third-Party Content or Third-Party Service. Further,
              information and opinions provided by Rollup employees and agents
              of Rollup in interactive areas of the Offerings are not
              necessarily endorsed by Rollup and do not necessarily represent
              the beliefs and opinions of Rollup. You agree that Rollup is not
              responsible for the availability, accuracy, or content of any
              Third-Party Content or Third-Party Service. Your use of and
              reliance on any Third-Party Content or Third-Party Service is at
              your own risk. Some of the services made available through the
              Offerings and Third-Party Services may be subject to additional
              third-party terms of service, privacy policies, licensing terms
              and disclosures, and other terms, conditions, and policies. It is
              your responsibility to familiarize yourself with any such
              applicable third-party terms. Rollup is not responsible for, and
              makes no representations or warranties about (a) any Third-Party
              Content or Third-Party Services or your use thereof, or (b) any
              third-party terms or your compliance with them. Rollup reserves
              the right to disable any link or remove any Third-Party Content
              and/or Third-Party Service at any time in its sole discretion.
            </p>
            <h2>8. Disclaimer</h2>
            <p>
              THE OFFERINGS ARE PROVIDED ON AN “AS IS, AS AVAILABLE” BASIS.
              ROLLUP EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT. ROLLUP DISCLAIMS ALL RESPONSIBILITY FOR ANY
              LOSS, INJURY, CLAIM, LIABILITY, OR DAMAGE OF ANY KIND RESULTING
              FROM, ARISING OUT OF, OR IN ANY WAY RELATED TO: (1) ANY ERRORS IN
              OR OMISSIONS FROM THE OFFERINGS INCLUDING, BUT NOT LIMITED TO,
              TECHNICAL INACCURACIES AND TYPOGRAPHICAL ERRORS, (2) THIRD-PARTY
              COMMUNICATIONS, (3) ANY THIRD-PARTY SERVICES, WEBSITES, OR
              THIRD-PARTY CONTENT THEREIN DIRECTLY OR INDIRECTLY ACCESSED
              THROUGH LINKS ON THE OFFERINGS, INCLUDING, BUT NOT LIMITED TO, ANY
              ERRORS IN OR OMISSIONS THEREFROM, (4) THE UNAVAILABILITY OF THE
              OFFERINGS, (5) YOUR USE OF THE OFFERINGS, OR (6) YOUR USE OF ANY
              EQUIPMENT OR SOFTWARE IN CONNECTION WITH THE OFFERINGS.
            </p>
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT OF THE LAW (AND UNLESS ROLLUP HAS ENTERED
              INTO A SEPARATE WRITTEN AGREEMENT THAT OVERRIDES THESE TERMS),
              ROLLUP WILL NOT BE LIABLE FOR ANY LOSS, INJURY, CLAIM, LIABILITY,
              OR DAMAGE OF ANY KIND RESULTING FROM YOUR USE OF THE OFFERINGS,
              ANY FACTS, CONTENT, OR OPINIONS APPEARING ON OR THROUGH AN
              INTERACTIVE AREA, OR ANY THIRD-PARTY CONTENT OR THIRD-PARTY
              SERVICE. ROLLUP WILL NOT BE LIABLE FOR ANY SPECIAL, DIRECT,
              INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, LOST
              PROFITS, LOST REVENUE, LOST BUSINESS OPPORTUNITIES, LOSS OF DATA,
              OR REPUTATIONAL DAMAGES (E.G., OFFENSIVE OR DEFAMATORY STATEMENTS)
              OF ANY KIND WHATSOEVER (INCLUDING, WITHOUT LIMITATION,
              ATTORNEYS&apos; FEES) IN ANY WAY DUE TO, RESULTING FROM, OR
              ARISING IN CONNECTION WITH THESE TERMS, THE USE OF OR INABILITY TO
              USE THE OFFERINGS, THE INTERACTIVE AREAS, OR ANY THIRD-PARTY
              CONTENT OR THIRD PARTY SERVICES OR FOR ANY AMOUNTS IN EXCESS OF
              ONE HUNDRED DOLLARS ($100).
            </p>
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold Rollup, and its
              affiliates, officers, directors, employees, agents, licensors, and
              suppliers harmless from and against all claims, losses, expenses,
              damages, and costs, including reasonable attorneys&apos; fees,
              arising out of or relating to: (1) your access to or use of the
              Offerings, including your Content, (2) your violation of these
              Terms, (3) your breach of your representations and warranties
              provided under these Terms, (4) your products or services, or the
              marketing or provision thereof to end users, or (5) the
              infringement by you, or any third party using your account, of any
              intellectual property or other right of any person or entity.
              Rollup reserves the right, at your expense, to assume the
              exclusive defense and control of any matter for which you are
              required to indemnify us and you agree to cooperate with our
              defense of these claims. You agree not to settle any such matter
              without the prior written consent of Rollup.
            </p>
            <h2>11. Governing Law</h2>
            <p>
              These Terms are to be governed by and construed in accordance with
              the internal laws of the State of California, without regard for
              principles of conflicts of laws. Subject to the Dispute Resolution
              section below, Excluded Disputes and Disputes (defined below) that
              cannot be arbitrated must be brought exclusively in the state and
              federal courts sitting in Alemada County, California.
            </p>
            <h2>12. Dispute Resolution</h2>
            <p>
              PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS,
              INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
            </p>
            <h3>12.1. Informal Negotiations.</h3>
            <p>
              The parties will first attempt in good faith to promptly resolve
              any disputes arising out of or relating to these Terms (or the
              breach, termination, enforcement, interpretation, or validity
              thereof) (each a “Dispute”) by negotiation between representatives
              of each party with the authority to resolve such Dispute
              informally for at least thirty (30) days before initiating any
              arbitration. Informal negotiations begin upon written notice from
              one party to the other. You will send notice to{" "}
              <Link href="mailto:legal@rollup.ai">legal@rollup.ai</Link>. Rollup
              will send notice to you at your address in our records or by email
              to the email address provided by you in connection with your use
              of the Offerings.
            </p>
            <h3>12.2. Binding Arbitration.</h3>
            <p>
              If the parties are unsuccessful in resolving the Dispute through
              informal negotiations, such Dispute will be submitted to final and
              binding arbitration. Arbitration will be conducted in English and
              administered as follows: (i) if in the U.S., by the American
              Arbitration Association (AAA) under its rules or (ii) if outside
              the U.S., by the International Centre for Dispute Resolution
              (ICDR) in accordance with the International Arbitration Rules then
              in effect. For more information, see www.adr.org. Except as
              required by law, neither party nor its representatives may
              disclose the existence, content, or results of any arbitration
              without the other party&apos;s prior written consent.
            </p>
            <p>
              The arbitrator is not empowered to award damages in excess of
              compensatory damages and each party hereby irrevocably waives any
              right to recover such damages with respect to any Dispute resolved
              by arbitration. The decision of the arbitrator will be in
              accordance with these Terms and will be binding upon the parties.
              Each party hereby waives any right it may otherwise have under the
              laws of any jurisdiction to any form of appeal. Judgment upon the
              award rendered may be entered in and enforced by any court of
              competent jurisdiction having jurisdiction over both parties. The
              arbitrator rules on his or her own jurisdiction, including the
              arbitrability of any claim; however, a court has exclusive
              authority to enforce the prohibition on arbitration on a
              class-wide basis or in a representative capacity. These Terms
              govern if there is a conflict with the AAA or the ICDR rules as
              applicable
            </p>
            <h3>12.3. Excluded Disputes.</h3>
            <p>
              Notwithstanding the foregoing, neither party is required to
              arbitrate claims: (1) where all named parties seek monetary relief
              which, in the aggregate, qualifies as a claim that meets the
              requirements of an applicable small claims court; (2) seeking
              injunctive relief; or (3) seeking to enforce or protect, or
              concerning the validity of, any of your or Rollup&apos;s
              intellectual property rights. However, if a small claim is
              transferred, removed, or appealed to a different court, either
              party may require that the claim be submitted to final binding
              arbitration.
            </p>
            <h3>12.4. Restrictions/No Class Actions.</h3>
            <p>
              THE PARTIES AGREE THAT ANY CLAIM BROUGHT IN CONNECTION WITH A
              DISPUTE, WHETHER RESOLVED THROUGH ARBITRATION OR OTHERWISE, WILL
              TAKE PLACE ON AN INDIVIDUAL BASIS. THE PARTIES WAIVE THE RIGHT TO
              PARTICIPATE IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION OR
              ARBITRATION, AND THE RIGHT TO A TRIAL BY JURY. UNLESS BOTH YOU AND
              ROLLUP AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN
              THE CLAIMS OF OTHER PERSONS OR PARTIES WHO MAY BE SIMILARLY
              SITUATED, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A
              REPRESENTATIVE OR CLASS PROCEEDING.
            </p>
            <h3>12.5. Severability.</h3>
            <p>
              If the Restrictions/No Class Actions section is found to be
              illegal or unenforceable as to all or some parts of a dispute,
              then those parts will not be arbitrated but will be resolved in a
              court of competent jurisdiction, with the balance resolved through
              arbitration.
            </p>
            <p>
              If any provision of this Dispute Resolution section is found to be
              illegal or unenforceable, then that provision will be severed;
              however, the remaining provisions will still apply and shall be
              interpreted to as nearly as possible achieve the original intent,
              inclusive of the severed provision.
            </p>
            <h3>12.6. Survival.</h3>
            <p>
              This Dispute Resolution section will survive any termination of
              these Terms or your use of the Offerings.
            </p>
            <h2>13. Termination</h2>
            <p>
              You or Rollup may terminate these Terms at any time with notice to
              the other. On termination, you lose the right to access or use the
              Offerings. The following will survive termination: Registration
              and Your Account, License of your Content to Rollup, Feedback and
              Suggestions, Use Limitation, Limitation of Liability,
              Indemnification, Governing Law, Dispute Resolution, and the
              General sections of these Terms, and any other terms that would
              naturally survive by their nature. Any amounts owed by either
              party prior to termination remain owed after termination. Rollup
              will have no liability or responsibility to any user related to or
              arising out of any termination of access to the Offerings.
            </p>
            <h2>14. General</h2>
            <p>
              These Terms incorporate by reference any notices contained on this
              website, the Privacy Notice, the Copyright Notice, and any other
              referenced policies, and constitute the entire agreement with
              respect to access to and use of the Offerings (unless you and
              Rollup have entered a separate agreement that explicitly overrides
              these Terms). If there is conflict among the terms of the
              foregoing notice or policies, these Terms prevail. If any
              provision of these Terms is unlawful, void, or unenforceable, then
              that provision will be deemed severable from the remaining
              provisions and will not affect their validity and enforceability.
              If Rollup does not act to enforce a breach of these Terms, that
              does not mean Rollup has waived its right to enforce these Terms.
              You may not assign or transfer these Terms or any of your rights
              or obligations (or your membership or use of Offerings) to anyone
              without Rollup&apos;s consent. Rollup may assign these Terms to
              its affiliates or a party that buys Rollup without your consent.
              There are no third-party beneficiaries to these Terms.
            </p>
            <h2>15. Privacy</h2>
            <p>
              Your use of the Offerings is subject to these Terms and
              Rollup&apos;s Privacy Notice.
            </p>
            <h2>16. Modifications to Terms</h2>
            <p>
              Rollup may, in its sole discretion, modify or revise these Terms,
              including without limitation Rollup&apos;s Privacy Notice and any
              referenced policies, at any time by posting the amended terms on
              the Offerings or otherwise linking to them in the Offerings.
              Rollup additionally may either: (1) notify you via the contact
              information associated with your account if you have registered
              with the Offerings (you must ensure that Rollup&apos;s email is
              not filtered from your Inbox by your ISP or email software), or
              (2) post the date of the update on the Terms, Privacy Notice, or
              other applicable policies. You agree that your use of the
              Offerings after the date on which the Terms changed will
              constitute your acceptance of the updated Terms, and that you
              agree to be bound by such modifications or revisions.
            </p>
            <h2>17. Copyright Notice</h2>
            <h3>17.1. Reporting Claims of Copyright Infringement</h3>
            <p>
              Rollup takes claims of copyright infringement seriously. We will
              respond to notices of alleged copyright infringement that comply
              with applicable law. If you believe any materials accessible on or
              from the Offerings infringe your copyright, you may request
              removal of those materials (or access to them) from the Offerings
              by submitting written notification to our Copyright Agent
              (designated below). In accordance with the Online Copyright
              Infringement Liability Limitation Act of the Digital Millennium
              Copyright Act (17 U.S.C. § 512) (“DMCA“), the written notice (the
              “DMCA Notice”) must include substantially the following:
            </p>
            <ul>
              <li>Your physical or electronic signature</li>
              <li>
                Identification of the copyrighted work you believe has been
                infringed or, if the claim involves multiple works on the
                Offerings, a representative list of such works
              </li>
              <li>
                Identification of the material you believe to be infringing, in
                a sufficiently precise manner to allow us to locate that
                material
              </li>
              <li>
                Adequate information to allow us to contact you (including your
                name, postal address, telephone number, and, if available, email
                address)
              </li>
              <li>
                A statement that you have a good-faith belief that use of the
                copyrighted material is not authorized by the copyright owner,
                its agent, or the law
              </li>
              <li>
                A statement that the information in the written notice is
                accurate
              </li>
              <li>
                A statement, under penalty of perjury, that you are authorized
                to act on behalf of the copyright owner
              </li>
            </ul>
            <p>
              DMCA Notices may be sent to our designated Copyright Agent
              legal@rollup.ai
            </p>
            <p>
              If you fail to comply with all the requirements of Section
              512(c)(3) of the DMCA, your DMCA Notice may not be effective.
            </p>
            <p>
              Please be aware that if you knowingly materially misrepresent that
              material or activity on the Offerings is infringing your
              copyright, you may be held liable for damages (including costs and
              attorneys&apos; fees) under Section 512(f) of the DMCA.
            </p>
            <p>
              It is Rollup&apos;s policy to respond to notices of alleged
              copyright infringement that comply with DMCA per this Copyright
              Notice. Your acceptance of these Terms is also your consent to the
              copyright practices described in this Copyright Notice. Rollup may
              terminate any user&apos;s access to the Offerings if Rollup
              determines that a user is a repeat infringer.
            </p>
            <h3>17.2. Counter-Notice</h3>
            <p>
              If you believe that a notice of copyright infringement has been
              improperly submitted against you, you may submit a Counter-Notice,
              pursuant to Sections 512(g)(2) and (3) of the Digital Millennium
              Copyright Act. You may provide a written communication which
              contains:
            </p>
            <ul>
              <li>Your physical or electronic signature;</li>
              <li>
                Identification of the material removed or to which access has
                been disabled;
              </li>
              <li>
                A statement under penalty of perjury that you have a good-faith
                belief that removal or disablement of the material was a mistake
                or that the material was misidentified; and
              </li>
              <li>
                Your full name, your email address, your mailing address, and a
                statement that you consent to the jurisdiction of the Federal
                District court (1) in the judicial district where your address
                is located if the address is in the United States, or (2)
                located in the Central District of California (Los Angeles
                County) if your address is located outside the United States,
                and that you will accept service of process from the complainant
                submitting the notice or their authorized agent.
              </li>
            </ul>
            <p>
              Please submit your Counter-Notice to Rollup&apos;s Copyright Agent
              at the address specified above.
            </p>
            <h3>17.3. Repeat Infringers</h3>
            <p>
              In appropriate circumstances, Rollup will disable and/or terminate
              the accounts of users who are repeat infringers.
            </p>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
