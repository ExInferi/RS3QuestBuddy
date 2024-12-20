import { Button } from "@mantine/core";
import App from "./App";
import { useEffect, useState } from "react";

export const AltGuard = () => {
	const [override, setOverride] = useState(false);
	useEffect(() => {
		if (window.alt1) {
			alt1.identifyAppUrl("./appconfig.prod.json");
		}
	}, [window.alt1]);

	if (window.alt1 || override) {
		return <App />;
	}

	return (
		<>
			<div className="App">
				<h1>ALT1 not found</h1>
				<p>
					<a
						href={`alt1://addapp/${window.location.protocol}//${
							window.location.host
						}/${
							!window.location.host.includes("localhost")
								? "RS3QuestBuddy/" //Include repo name (this is only for github pages)
								: ""
						}appconfig${
							!window.location.host.includes("localhost")
								? ".prod" //Target prod (this is only for github pages)
								: ""
						}.json`}
					>
						<Button className="Alt1Button" variant="outline">
							Click here to add this to alt1
						</Button>
					</a>
				</p>

				<Button
					className="Alt1Button"
					variant="outline"
					onClick={() => setOverride(true)}
				>
					Continue to RS3 Quest Buddy Web (No Alt1)
				</Button>
			</div>
		</>
	);
};
