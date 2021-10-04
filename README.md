# :dizzy: Users hierarchy task
Display a tree hierarchy of users

## Notes
- Using redux for normalized state and ui state management.
- react-query for simple server state
- All UI components are based on my personal design-system components and that's th reason this project supports typescript.
- Added tests using jest and rtl for the two main flows (login + tree) - test won't run on "yarn test" because of babel issues, but they pass :).
- Edit functionality also works
- Login page: added a default user and password so you wont have to type it yourself...
