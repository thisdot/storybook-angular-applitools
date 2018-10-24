import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { ContentEditableComponent } from './../app/components/contenteditable.component';

storiesOf('ContentEditable Component', module)
  .add(
    'with yellow background',
    withNotes('Testing the background color for the editable area and setting it to yellow')(() => ({
      component: ContentEditableComponent,
      props: {
        styles: { 'background-color': 'yellow', 'padding': '20px' },
        ngModel: 'The content goes here',
        ngModelChange: action('ngModelChange')
      }
    }))
  )
  .add(
    'with red background',
    withNotes('Testing the background color for the editable area by setting it to red')(() => ({
      component: ContentEditableComponent,
      props: {
        styles: { 'background-color': 'red', 'padding': '20px' },
        ngModel: 'The content goes here',
        ngModelChange: action('ngModelChange')
      }
    }))
  )
  .add(
    'with blue background and margin-top 50px',
    withNotes('Testing the background color and margin-top for the editable area by setting it to blue with margin-top of 50px')(() => ({
      component: ContentEditableComponent,
      props: {
        styles: {
          'background-color': 'green',
          'color': '#fff',
          'padding': '20px',
          'margin-top': '50px'
        },
        ngModel: 'The content goes here',
        ngModelChange: action('ngModelChange')
      }
    }))
  ).add(
    'with html content',
    withNotes('Testing the content passed to the component by including HTML elements in the content')(() => ({
      component: ContentEditableComponent,
      props: {
        styles: {
          'background-color': '#eee',
          padding: '20px',
        },
        ngModel: '<h1>Header 1</h1>',
        ngModelChange: action('ngModelChange')
      }
    }))
  );
