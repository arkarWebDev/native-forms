import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Personal } from "../types/personal-schema";
import { Payout } from "../types/payout-schema";

type SummaryContext = {
  personalInfo: Personal | undefined;
  setPersonalInfo: (data: Personal) => void;
  payoutInfo: Payout | undefined;
  setPayoutInfo: (data: Payout) => void;
};

const SummaryContext = createContext<SummaryContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  payoutInfo: undefined,
  setPayoutInfo: () => {},
});

export const SummaryProvider = ({ children }: PropsWithChildren) => {
  const [personalInfo, setPersonalInfo] = useState<Personal>();
  const [payoutInfo, setPayoutInfo] = useState<Payout>();

  return (
    <SummaryContext.Provider
      value={{ personalInfo, setPersonalInfo, payoutInfo, setPayoutInfo }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export const useSummary = () => useContext(SummaryContext);
