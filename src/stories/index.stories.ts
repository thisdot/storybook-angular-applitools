import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { ContentEditableComponent } from './../app/components/contenteditable.component';

storiesOf('ContentEditable Component', module)
  .add(
    'with yellow background',
    withNotes('Testing the background color for the editable area and setting it to yellow')(() => ({
      component: ContentEditableComponent,
      props: {
        styles: { 'background-color': 'yellow', 'padding': '25px' },
        ngModel: 'The content goes here',
        ngModelChange: action('ngModelChange')
      }
    }))
  );
