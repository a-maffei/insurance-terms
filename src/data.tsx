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
];

const asciiArray: number[] = Array(26)
  .fill(0)
  .map((el, i) => i + 65);

export const alphabet: string[] = asciiArray.map((el) =>
  String.fromCharCode(el)
);
