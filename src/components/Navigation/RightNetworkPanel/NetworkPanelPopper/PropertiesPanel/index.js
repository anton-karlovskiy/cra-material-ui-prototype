
import React from 'react';

import LabeledDatePicker from 'components/LabeledDatePicker';
import LabeledTextField from 'components/LabeledTextField';
import LabeledTextArea from 'components/LabeledTextArea';

const PropertiesPanel = () => {
  return (
    <div>
      <LabeledTextField
        greyBg
        label='Name' />
      <LabeledTextArea
        greyBg
        label='Description' />
      <LabeledDatePicker
        label='Effective from date'
        vertical
        fullWidth
        greyBg />
      <LabeledDatePicker
        label='Effective to date'
        vertical
        fullWidth
        greyBg />
    </div>
  );
};

export default PropertiesPanel;
