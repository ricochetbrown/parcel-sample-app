import angular from 'angular';
import 'angular-material/angular-material.css'

import components from './components';

angular.module('main', [components.name]);

console.log('hello');