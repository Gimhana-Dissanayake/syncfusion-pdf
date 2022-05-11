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
  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          id="container"
          // documentPath="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
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
    </div>
  );
}

export default App;
