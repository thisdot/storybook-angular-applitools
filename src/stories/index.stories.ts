import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { ContentEditableComponent } from './../app/components/contenteditable.component';

storiesOf('ContentEditableComponent', module)
  .add(
    'editable content',
    withNotes('')(() => ({
      component: ContentEditableComponent,
      props: {
        styles: { 'background-color': 'yellow' },
        ngModel: 'The content goes here',
        ngModelChange: action('ngModelChange')
      }
    }))
  )
  .add(
    'red background',
    withNotes('')(() => ({
      component: ContentEditableComponent,
      props: {
        styles: { 'background-color': 'red' },
        ngModel: 'The content goes here',
        ngModelChange: action('ngModelChange')
      }
    }))
  );


storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
