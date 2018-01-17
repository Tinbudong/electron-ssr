import Vue from 'vue'
import { Row, Col } from 'erguotou-iview/src/components/grid'
import { Select, Option, OptionGroup } from 'erguotou-iview/src/components/select'
import AppView from './AppView'
import ExternalLink from './ExternalLink'

import {
  Alert,
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Icon,
  Input,
  InputNumber,
  Tabs,
  Table,
  Tag,
  Tree,
  Tooltip,
  Poptip,
  Spin
} from 'erguotou-iview'

const components = {
  Alert,
  AutoComplete,
  Button,
  Checkbox,
  Col,
  Form,
  FormItem: Form.Item,
  Icon,
  Input,
  InputNumber,
  Option,
  OptionGroup,
  Row,
  Select,
  Tabs,
  TabPane: Tabs.Pane,
  Table,
  Tag,
  Tree,
  Tooltip,
  Poptip,
  Spin
}

Object.keys(components).forEach(key => {
  if (process.env.NODE !== 'production') {
    console.log('i' + key)
  }
  Vue.component('i' + key, components[key])
})

Vue.component('AppView', AppView)
Vue.component('ExternalLink', ExternalLink)
