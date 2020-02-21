import { SwitchNavigator } from 'react-navigation';
import { MenuStack, SplashScreenStack, UserAuthStack, SessionScreenStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    App: Drawer,
    Menu: MenuStack,
    SplashScreen: SplashScreenStack,
    SessionScreen: SessionScreenStack,
    DefinitionMenu: MenuStack,
    HistoryMenu: MenuStack,
    PrincipleMenu: MenuStack,
    BenefitMenu: MenuStack,
    InfrastructureMenu: MenuStack,
    CompetitionMenu: MenuStack,
    TipsMenu: MenuStack,
    RiskMenu: MenuStack,
    Playquiz: MenuStack,
    StyleMenu: MenuStack,
    TeknikMenu: MenuStack,
    SignIn: UserAuthStack,
    SignUp: UserAuthStack
  },
  {
    initialRouteName: 'SignIn'
  }
);
