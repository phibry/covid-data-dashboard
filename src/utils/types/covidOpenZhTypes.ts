export type record = {
  abbreviation_canton_and_fl: string;
  current_hosp_fwd: number;
  current_icu_fwd: number;
  current_vent_fwd: number;
  date: string;
  ncumul_ICU_fwd: number;
  ncumul_conf_fwd: number;
  ncumul_deceased_fwd: number;
  ncumul_hosp_fwd: number;
  ncumul_released_fwd: number;
  ncumul_tested_fwd: number;
  ncumul_vent_fwd: number;
};

export type totals = {
  current_hosp_fwd: number;
  current_icu_fwd: number;
  current_vent_fwd: number;
  ncumul_ICU_fwd: number;
  ncumul_conf_fwd: number;
  ncumul_deceased_fwd: number;
  ncumul_hosp_fwd: number;
  ncumul_released_fwd: number;
  ncumul_tested_fwd: number;
  ncumul_vent_fwd: number;
};

export type dailyCase = {
  totals: totals | null;
  records: Array<record>;
};
