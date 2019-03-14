import angular from 'angular';
import 'angular-animate';
import 'angular-aria'
import 'angular-messages'
import 'angular-material';

import chartHeaderComponent from './chart-header.component';

export default angular.module('chartHeader', ['ngMaterial', 'ngAnimate']).component('chartHeader', chartHeaderComponent);
