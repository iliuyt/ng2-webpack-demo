// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var HMR: boolean;

interface GlobalEnvironment {
    ENV;
    HMR;
}
