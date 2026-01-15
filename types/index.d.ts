declare type HeaderBoxProps = {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
  };

declare type TotalBalanceBoxProps = {
    accounts: any[];
    totalBanks: number;
    totalCurrentBalance: number;
}

declare type SiderbarProps = {
    user: any;
}

declare type DoughnutChartProps = {
    accounts: any[];
}

declare type MobileNavProps = {
    user: any;
}
