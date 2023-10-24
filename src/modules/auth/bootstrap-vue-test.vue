<template>
    <div>
      <b-navbar type="dark" color="primary">
        <b-navbar-brand>My App</b-navbar-brand>
      </b-navbar>
  
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <b-alert type="success">This is a success alert!</b-alert>
          </b-col>
        </b-row>
  
        <b-row>
          <b-col cols="6">
            <b-table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                </tr>
              </tbody>
            </b-table>
          </b-col>
          <b-col cols="6">
            <b-form>
              <b-form-group>
                <b-form-label for="name">Name</b-form-label>
                <b-form-input type="text" id="name" />
              </b-form-group>
  
              <b-button type="submit">Submit</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'bootstrap-vue-test',
  }
  </script>