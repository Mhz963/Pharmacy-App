import React, { useState } from "react";

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [passwordVisibilitytwo, setPasswordVisibilitytwo] = useState(true);
  const [passwordVisibilitytwoth, setPasswordVisibilitytwoth] = useState(true);
  const [bookmarkiconvisibility, setbookmarkiconvisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye-off');
  const [rightIcontwo, setRightIcontwo] = useState('eye-off');
  const [rightIcontwoth, setRightIcontwoth] = useState('eye-off');
  const [bookmarkicon, setbookmarkicon] = useState('bookmark-o');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handlePasswordVisibilitytwo = () => {
    if (rightIcontwo === 'eye-off') {
      setRightIcontwo('eye');
      setPasswordVisibilitytwo(!passwordVisibilitytwo);
    } else if (rightIcontwo === 'eye') {
      setRightIcontwo('eye-off');
      setPasswordVisibilitytwo(!passwordVisibilitytwo);
    }
  };
  const handlePasswordVisibilitytwoth = () => {
    if (rightIcontwoth === 'eye-off') {
      setRightIcontwoth('eye');
      setPasswordVisibilitytwoth(!passwordVisibilitytwoth);
    } else if (rightIcontwoth === 'eye') {
      setRightIcontwoth('eye-off');
      setPasswordVisibilitytwoth(!passwordVisibilitytwoth);
    }
  };
  const bookmarkseticon = () => {
    if (bookmarkicon === 'bookmark-o') {
      setbookmarkicon('bookmark');
      setbookmarkiconvisibility(!bookmarkiconvisibility);
    } else if (bookmarkicon === 'bookmark') {
      setbookmarkicon('bookmark-o');
      setbookmarkiconvisibility(!bookmarkiconvisibility);
    }
  };
  return {
    passwordVisibilitytwo,
    passwordVisibilitytwoth,
    passwordVisibility,
    bookmarkiconvisibility,
    rightIcon,
    bookmarkicon,
    rightIcontwo,
    rightIcontwoth,
    handlePasswordVisibility,
    handlePasswordVisibilitytwo,
    handlePasswordVisibilitytwoth,
    bookmarkseticon
  };
};