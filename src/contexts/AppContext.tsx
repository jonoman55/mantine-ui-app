import dayjs from 'dayjs';
import { useState, createContext, useContext, ReactNode, SetStateAction } from 'react';

type Props = {
    children: ReactNode;
};

interface Player {
    first_name: string;
    last_name: string;
};

interface IAppContext {
    randomPlayer: Player | undefined;
    setRandomPlayer: React.Dispatch<React.SetStateAction<Player>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    chips: string[];
    setChips: React.Dispatch<React.SetStateAction<string[]>>;
    timeValue: Date | undefined;
    setTimeValue: React.Dispatch<React.SetStateAction<Date>>;
    rangeValue: [Date, Date] | undefined;
    setRangeValue: React.Dispatch<React.SetStateAction<[Date, Date]>>;
};

const initalState: IAppContext = {
    opened: false,
    setOpened: function (value: SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
    },
    loading: false,
    setLoading: function (value: SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
    },
    chips: ['react'],
    setChips: function (value: SetStateAction<string[]>): void {
        throw new Error('Function not implemented.');
    },
    timeValue: undefined,
    setTimeValue: function (value: SetStateAction<Date>): void {
        throw new Error('Function not implemented.');
    },
    rangeValue: undefined,
    setRangeValue: function (value: SetStateAction<[Date, Date]>): void {
        throw new Error('Function not implemented.');
    },
    randomPlayer: undefined,
    setRandomPlayer: function (value: SetStateAction<Player>): void {
        throw new Error('Function not implemented.');
    }
};

const AppContext = createContext<IAppContext>(initalState);

const initialPlayerState: Player = {
    first_name: "",
    last_name: "",
};

function AppProvider({ children }: Props) {
    const now = new Date();
    const then = dayjs(now).add(30, 'minutes').toDate();
    const [rangeValue, setRangeValue] = useState<[Date, Date]>([now, then]);
    const [randomPlayer, setRandomPlayer] = useState<Player>(initialPlayerState);
    const [timeValue, setTimeValue] = useState(new Date());
    const [opened, setOpened] = useState(false);
    const [loading, setLoading] = useState(false);
    const [chips, setChips] = useState(['react']);

    const values = {
        randomPlayer,
        setRandomPlayer,
        timeValue,
        setTimeValue,
        rangeValue,
        setRangeValue,
        opened,
        setOpened,
        loading,
        setLoading,
        chips,
        setChips,
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };