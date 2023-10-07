import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, StatusBar, FlatList, Modal, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { AllBookMarkStyle } from '../../../styles';
import { useTogglePasswordVisibility } from '../../../utils/useTogglePasswordVisibility';
import { useSelector } from "react-redux";
import { Colors, SF, allBookMarkData } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { StateModalSelectFun, VectoreIcons } from '../../../components'

const AllBookMarkScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [modalVisible, setModalVisible] = useState(false);
  const [sleact, setsleact] = useState('')
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const AllBookMarkStyles = useMemo(() => AllBookMarkStyle(Colors), [Colors]);

  const { bookmarkicon, bookmarkseticon } = useTogglePasswordVisibility();


  return (
    <View style={AllBookMarkStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={AllBookMarkStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={AllBookMarkStyles.minflexview}>
            <View style={AllBookMarkStyles.minviewsigninscreen}>
              <View>
                <TouchableOpacity onPress={bookmarkseticon} style={AllBookMarkStyles.flexixconview}>
                  <TouchableOpacity onPress={bookmarkseticon}>
                    <VectoreIcons icon="FontAwesome" name={bookmarkicon} size={SF(22)} color={colorrdata} />
                  </TouchableOpacity>
                  <Text style={AllBookMarkStyles.nothingheretext}>{t("Nothing_Label")}</Text>
                </TouchableOpacity>
                <Text style={AllBookMarkStyles.nothingheretexttwo}>{t("Add_Your_Favourite_Places_Label")}</Text>
                <TouchableOpacity style={AllBookMarkStyles.flexiconset} onPress={() => setModalVisible(true)}>
                  <VectoreIcons icon="AntDesign" name="pluscircle" size={22} color={Colors.black_text_color} />
                </TouchableOpacity>
                {sleact === '' ?
                  <Text style={AllBookMarkStyles.addplacestextset}>{t("Add_Places_Label")}</Text>
                  :
                  <Text style={AllBookMarkStyles.addplacestextset}>{t(sleact)}</Text>
                }
              </View>
              <View style={AllBookMarkStyles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                >
                  <View style={AllBookMarkStyles.centeredViewtwo}>
                    <View style={AllBookMarkStyles.modalView}>
                      <FlatList
                        data={allBookMarkData}
                        renderItem={({ item, index }) => (<StateModalSelectFun item={item} index={index}
                          setsleact={setsleact}
                          setModalVisible={setModalVisible}
                          modalVisible={modalVisible}
                        />)}
                        keyExtractor={item => item.id}
                        style={AllBookMarkStyles.setflex}
                      />
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default AllBookMarkScreen;
