export type TermsType = {
  id: number;
  name: string;
  description: string;
};

export const insuranceTerms: TermsType[] = [
  {
    id: 1,
    name: "Actuary",
    description:
      "A professional who uses mathematical and statistical methods to assess risk and calculate premiums, reserves, and other financial values for insurance companies.",
  },
  {
    id: 2,
    name: "Annuity",
    description:
      "A financial product sold by insurance companies that provides a series of payments over a specified period, often used to generate income during retirement.",
  },
  {
    id: 3,
    name: "Beneficiary",
    description:
      "The person or entity designated to receive the benefits of an insurance policy or financial product, such as the death benefit from a life insurance policy.",
  },
  {
    id: 4,
    name: "Berufsunfähigkeitsversicherung",
    description:
      "Disability insurance in Germany, offering financial support to policyholders who become unable to work due to illness or injury, covering a portion of their lost income.",
  },
  {
    id: 5,
    name: "Claim",
    description:
      "A request made by an insured person to their insurance company for payment or compensation for a covered loss or event, as specified in the insurance policy.",
  },
  {
    id: 6,
    name: "Coinsurance",
    description:
      "A cost-sharing arrangement between the insured person and the insurer, where both parties pay a percentage of the covered expenses, up to a specified limit.",
  },
  {
    id: 7,
    name: "Coverage",
    description:
      "The protection provided by an insurance policy against specific risks and losses, as detailed in the terms and conditions of the contract.",
  },
  {
    id: 8,
    name: "Deductible",
    description:
      "The amount an insured person must pay out-of-pocket before the insurance company begins to cover the cost of a claim, as specified in the insurance policy.",
  },
  {
    id: 9,
    name: "Exclusions",
    description:
      "Specific risks, events, or conditions that are not covered by an insurance policy, as detailed in the terms and conditions of the contract.",
  },
  {
    id: 10,
    name: "Gebäudeversicherung",
    description:
      "Building insurance, protecting property owners from financial losses due to damage or destruction of their property resulting from insured events like fire or natural disasters.",
  },
  {
    id: 11,
    name: "Grace Period",
    description:
      "A specified period of time during which an insured person can make a premium payment after its due date without the policy being canceled or lapsing.",
  },
  {
    id: 12,
    name: "Haftpflichtversicherung",
    description:
      "Liability insurance in Germany, providing coverage for damages caused by the insured person to third parties, including bodily injury, property damage, and financial loss.",
  },
  {
    id: 13,
    name: "Hausratversicherung",
    description:
      "Home contents insurance, covering personal belongings inside a home against damage, theft, or loss due to insured events such as fire, water damage, and burglary.",
  },
  {
    id: 14,
    name: "Indemnity",
    description:
      "The principle of restoring an insured person to their financial position before a loss occurred, through payment or compensation from the insurance company.",
  },

  {
    id: 15,
    name: "Insurable Interest",
    description:
      "A financial interest that a person or entity has in the subject of insurance, such that the insured person would suffer a financial loss if the insured event occurred.",
  },
  {
    id: 16,
    name: "Kfz-Versicherung",
    description:
      "Motor vehicle insurance in Germany, a mandatory coverage for all motor vehicles to cover liability, partial or fully comprehensive insurance depending on the policy chosen.",
  },
  {
    id: 17,
    name: "Krankenversicherung",
    description:
      "Health insurance in Germany, providing coverage for medical expenses incurred by the insured person, including hospitalization, doctor visits, and prescription medications.",
  },
  {
    id: 18,
    name: "Liability",
    description:
      "The responsibility for an event, incident, or accident covered by an insurance policy, often resulting in a financial obligation for the resulting damages or injuries.",
  },
  {
    id: 19,
    name: "Moral Hazard",
    description:
      "The risk that the insured person will act less carefully because they are protected by insurance, potentially leading to greater likelihood or magnitude of loss.",
  },
  {
    id: 20,
    name: "Policy Limit",
    description:
      "The maximum amount that an insurance company will pay for a covered loss, as specified in the insurance policy. Anything above this limit is the responsibility of the insured.",
  },
  {
    id: 21,
    name: "Premium",
    description:
      "The payment made by the insured person or entity to the insurance company in exchange for coverage, usually paid on a monthly, quarterly, or annual basis.",
  },
  {
    id: 22,
    name: "Reinsurance",
    description:
      "A transaction in which an insurance company passes some risk to another insurance company, to reduce its potential for large losses or financial instability.",
  },
  {
    id: 23,
    name: "Rider",
    description:
      "An addition or amendment to an insurance policy that changes or expands the terms of the contract, often providing extra coverage for specific conditions or items.",
  },
  {
    id: 24,
    name: "Risk",
    description:
      "The possibility of a loss or adverse event that an insurance company assumes when issuing a policy. This is evaluated during the underwriting process.",
  },
  {
    id: 25,
    name: "Underwriting",
    description:
      "The process of evaluating a potential insured's risk profile, determining coverage terms, and calculating premiums. This process informs the insurer's decision to issue a policy.",
  },
  {
    id: 26,
    name: "Unearned Premium",
    description:
      "The portion of a premium that the insurance company has not yet 'earned' because the time period covered by the premium has not yet passed.",
  },
  {
    id: 27,
    name: "Versicherungsnehmer",
    description:
      "The policyholder in Germany, the person or entity who holds an insurance policy and is responsible for paying the premiums and abiding by the terms and conditions of the contract.",
  },
  {
    id: 28,
    name: "Waiting Period",
    description:
      "A period of time specified in a policy during which the insured is not eligible for certain benefits. It is common in health insurance policies.",
  },
  {
    id: 29,
    name: "Whole Life Insurance",
    description:
      "A type of permanent life insurance that provides coverage for the insured's entire lifetime, with a cash value component that grows over time.",
  },
  {
    id: 30,
    name: "Workers Compensation",
    description:
      "Insurance that provides medical benefits and wage replacement to employees injured in the course of employment. This is often required by law for businesses.",
  },
  {
    id: 31,
    name: "Zusatzversicherung",
    description:
      "Supplemental insurance in Germany, offering additional benefits on top of standard coverage. This could include dental care, alternative medicine treatments, or higher comfort hospital stays.",
  },
  {
    id: 32,
    name: "Rentenversicherung",
    description:
      "Pension insurance in Germany, a mandatory social insurance system providing financial support to retirees, with benefits based on contributions made during their working years.",
  },
  {
    id: 33,
    name: "Underinsured",
    description:
      "A situation in which an insured person or entity has insurance coverage, but it is not enough to fully cover the potential loss or liability.",
  },
  {
    id: 34,
    name: "Umbrella Policy",
    description:
      "A type of insurance that provides extra liability coverage beyond the limits of an insured's home, auto, or watercraft insurance. It covers additional risks and higher amounts not covered by other policies.",
  },
];

export const alphabet: string[] = Array(26)
  .fill(0)
  .map((el, i) => String.fromCharCode(i + 35));
