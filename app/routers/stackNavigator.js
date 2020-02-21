import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import Menu from '../screens/Menu';
import SplashScreen from '../screens/SplashScreen';
import SessionScreen from '../screens/SessionScreen';
import DefinitionMenu from '../screens/DefinitionMenu';
import HistoryMenu from '../screens/HistoryMenu';
import PrincipleMenu from '../screens/PrincipleMenu';
import BenefitMenu from '../screens/BenefitMenu';
import InfrastructureMenu from '../screens/InfrastructureMenu';
import CompetitionMenu from '../screens/CompetitionMenu';
import RiskMenu from '../screens/RiskMenu';
import TipsMenu from '../screens/TipsMenu'; 
import TeknikMenu from '../screens/TeknikMenu';
import StyleMenu from '../screens/StyleMenu';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Playquiz from '../screens/Playquiz';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const MenuStack = StackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    DefinitionMenu: {
      screen: DefinitionMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    HistoryMenu: {
      screen: HistoryMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    PrincipleMenu: {
      screen: PrincipleMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Playquiz: {
      screen: Playquiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    BenefitMenu: {
      screen: BenefitMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    InfrastructureMenu: {
      screen: InfrastructureMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    TipsMenu: {
      screen: TipsMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    CompetitionMenu: {
      screen: CompetitionMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    RiskMenu: {
      screen: RiskMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    StyleMenu: {
      screen: StyleMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    TeknikMenu: {
      screen: TeknikMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SessionScreenStack = StackNavigator(
  {
    SessionScreen: {
    screen: SessionScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UserAuthStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarVisible: false,
        // gesturesEnabled: false,
        // swipeEnabled: false,
      }
    },
  },
  {
    headerMode: 'none', navigationOptions: { tabBarVisible: false }
  }
);