import ReactDOM from "react-dom/client";
import { AltGuard } from "./alt1.tsx";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles.css";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Button.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles/Stepper.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/Accordion.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import { FontSizeProvider } from "./Components/FontContextProvider.tsx";

document.querySelector("html")!.style.fontSize = "16px";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<MantineProvider defaultColorScheme="dark">
		<FontSizeProvider>
			<AltGuard />
		</FontSizeProvider>
	</MantineProvider>
);
