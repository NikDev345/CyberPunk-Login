# Authentication Flow

## Overview
This document explains the logical flow of the authentication interface.

## Boot Sequence
- Terminal boot screen initializes system
- After completion, login interface is mounted

## Login States
The login interface operates in the following states:
- idle
- authenticating
- granted
- denied

## State Transitions
idle → authenticating → granted  
idle → authenticating → denied → idle

## Post Authentication
On ACCESS GRANTED, the interface transitions to the dashboard.
