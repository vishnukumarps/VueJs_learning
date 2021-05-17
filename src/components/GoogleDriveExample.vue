<template>
  <div>
    <button @click="ShowOnedrivePicker()">One Drive Picker</button>
    <a id="a1" src=""></a>
  </div>
</template>
  <script type="text/javascript" src="https://js.live.net/v5.0/OneDrive.js" id="onedrive-js"
    client-id="15c67db8-4dad-452f-8cba-8421335df62d"></script>
<script>
export default {
  name: "",
  methods: {
    ShowOnedrivePicker() {
      var oneDrivePickerOptions = {
        success: function (files) {
          console.log(files);
          alert(files.link + "  name:" + files.name);
          document.getElementById("a1").href = files.link;
          document.getElementById("a1").innerHTML = files.link;
        },
        cancel: function () {
          // handle when the user cancels picking a file
        },
        linkType: "webViewLink",
        multiSelect: false,
      };
      OneDrive.open(oneDrivePickerOptions);
    },
  },
};
</script>

<style>
</style>