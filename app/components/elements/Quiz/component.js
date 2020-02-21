/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Header/styles';
import AnimaButton from '../AnimaButton';
import I18n from '../../../i18n';

const { width, height } = Dimensions.get('window');
let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option1',
        options: {
          option1: 'Badruzaman',
          option2: 'Muhajir',
          option3: 'Budiningsih',
          option4: 'Arma Abdoelah'
        },
        question:
          'Renang ialah suatu cara yang dilakukan orang atau binatang untuk dapat menggerakan tubuhnya di air. Pengertian tersebut menurut ahli ____'
      },
      question2: {
        correctoption: 'option1',
        options: {
          option1: 'Melatih pernafasan',
          option2: 'Menambah stress',
          option3: 'Menambah berat badan',
          option4: 'Menurunkan mood'
        },
        question: 'Dibawah ini yang termasuk manfaat renang adalah ____'
      },
      question3: {
        correctoption: 'option1',
        options: {
          option1: 'Pergantian gerakan lengan',
          option2: 'Melakukan dorongan',
          option3: 'Tebasan kaki',
          option4: 'Di dalam air'
        },
        question: ' Pengambilan napas dalam renang gaya bebas dilakukan pada saat ____'
      },
      question4: {
        correctoption: 'option3',
        options: {
          option1: 'Tidak cepat lelah',
          option2: 'Tidak cepat lapar',
          option3: 'Beradaptasi dengan air',
          option4: 'Tidak kaku'
        },
        question: 'Tujuan pengenalan air dalam olahraga renang adalah ____'
      },
      question5: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question6: {
        correctoption: 'option4',
        options: {
          option1: 'Dada',
          option2: 'Punggung',
          option3: 'Bebas',
          option4: 'Kupu-kupu'
        },
        question:
          'Wajah para perenang berada di atas permukaan air atau menghadap ke langit, agar mudah untuk bisa bernafas dan lebih mudah membuka mata. Merupakan gaya renang ____'
      },
      question7: {
        correctoption: 'option4',
        options: {
          option1: '50 m, 100 m, 200 m, 400 m, 800 m (putri), 1500 m (putra)',
          option2: '100 m, 200 m',
          option3: '200 m, 400 m',
          option4: '10km'
        },
        question: 'Nomor Renang Putri-Putra dan yang lombakan dalam Olimpiade gaya dada ____'
      },
      question8: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question9: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question10: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question11: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question12: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question13: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question14: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question15: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question16: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question17: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question18: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question19: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      },
      question20: {
        correctoption: 'option4',
        options: {
          option1: 'Overline',
          option2: 'Deadline',
          option3: 'Online',
          option4: 'Telungkup'
        },
        question: 'Sikap badan pada renang gaya bebas adalah ____'
      }
    }
  }
};
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(k => jdata[k]);
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0
    };
  }
  prev() {
    if (this.qno > 0) {
      this.qno--;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption
      });
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption
      });
    } else {
      this.props.quizFinish((this.score * 100) / 5);
    }
  }
  _answer(status, ans) {
    if (status == true) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      if (ans == this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count });
      if (this.state.countCheck < 1 || ans == this.state.correctoption) {
        this.score -= 1;
      }
    }
  }
  render() {
    const _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(k => (
      <View key={k} style={{ margin: 15 }}>
        <AnimaButton
          countCheck={_this.state.countCheck}
          onColor="green"
          effect="tada"
          _onPress={status => _this._answer(status, k)}
          text={currentOptions[k]}
        />
      </View>
    ));

    return (
      <ScrollView>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View style={styles.oval}>
              <Text style={styles.welcome}>{this.state.question}</Text>
            </View>
            <View>{options}</View>
            <View style={{ flexDirection: 'row' }}>
              {/*   <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
        <View style={{margin:15}} /> */}
              <TouchableOpacity onPress={() => this.prev()}>
                <View
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    paddingLeft: 20,
                    marginRight: 50,
                    borderRadius: 10,
                    backgroundColor: 'green'
                  }}
                >
                  <Text size={30} color="white">
                    {I18n.t('descQuiz1')}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.next()}>
                <View
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    paddingLeft: 20,
                    borderRadius: 10,
                    backgroundColor: 'green'
                  }}
                >
                  <Text size={30} color="white">
                    {I18n.t('descQuiz')}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
