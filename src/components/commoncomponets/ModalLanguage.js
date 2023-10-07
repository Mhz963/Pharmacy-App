import React, { useState, useMemo } from "react";
import '../../screens/Authantication/SelectLanguage/i18n';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Modal, VectoreIcons, LanguageSelectFlat, } from '../../components';
import { LanguageStyles } from '../../styles';
import { SH, Colors, SF, LanguageDropdownData } from '../../utils';
import { useTheme } from '@react-navigation/native';

const ModalLanguage = (props) => {
    const { Colors } = useTheme();
    const LanguageStyless = useMemo(() => LanguageStyles(Colors), [Colors]);
    const { modalVisible, setModalVisible, close, changeLang } = props;
    const { t, i18n } = useTranslation();
    const [isFocus, setIsFocus] = useState(false);
    const [IconChange, SetIconChange] = useState('');
    const [selectLanguage, setSelectLanguage] = useState('en');
    const [selectLabel, setSelectLabel] = useState('');



    return (
        <Modal
            modalVisible={modalVisible}
            setModalVisible={() => setModalVisible()}
            close={() => close()}>
            <View style={LanguageStyless.LanguageViewStyleModal}>
                <View style={LanguageStyless.FlexViewStyle}>
                    <TouchableOpacity style={LanguageStyless.CloseButtonStyle} onPress={() => {
                        setModalVisible(false);
                    }}>
                        <VectoreIcons name="window-close" icon="FontAwesome" size={SF(35)} color={Colors.theme_background} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={LanguageDropdownData}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (< LanguageSelectFlat item={item} index={index} setIsFocus={setIsFocus}
                        IconChange={IconChange}
                        selectLanguage={selectLanguage}
                        selectLabel={selectLabel}
                        setSelectLanguage={setSelectLanguage}
                        SetIconChange={SetIconChange}
                        onPress={() => {
                            setSelectLanguage(item.value);
                            setSelectLabel(t(item.label));
                            SetIconChange(index);
                            setModalVisible(false);
                            changeLang(t(item.label))
                        }}
                    />)}
                    keyExtractor={item => item.id}
                />
            </View>
        </Modal>
    )
}

export default ModalLanguage;