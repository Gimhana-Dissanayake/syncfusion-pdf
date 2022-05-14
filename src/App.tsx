import React from "react";
import "./App.css";
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  Inject,
  FormFields,
  FormDesigner,
} from "@syncfusion/ej2-react-pdfviewer";

function App() {
  function load_1() {
    let vv = document?.getElementById("container") as any;

    var viewer = vv?.ej2_instances[0];

    console.log("VIEWER ", viewer);

    viewer.load("./dumm.pdf", null);
  }

  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          id="container"
          // documentPath="dumm.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ height: "640px" }}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              Annotation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              FormFields,
              FormDesigner,
            ]}
          />
        </PdfViewerComponent>
      </div>

      <div>
        <button
          onClick={() => {
            load_1();
          }}
        >
          LoadDocumentFromBase64
        </button>
      </div>
    </div>
  );
}

export default App;
