#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PropertiesCdkStack } from '../lib/properties-cdk-stack';

const app = new cdk.App();
new PropertiesCdkStack(app, 'PropertiesCdkStack');
