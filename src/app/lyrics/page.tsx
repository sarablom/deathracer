import { Metadata, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { MainHeading } from "../../components/MainHeading";
import { LyricsWrapper, LyricsList, SongList } from "./styles";
import albumCover from "../../../public/images/album-cover.jpg";
import { ToTopOfPageButton } from "../../components/ToTopOfPageButton";

export const metadata: Metadata = {
	title: "Deathracer --- Lyrics",
};

const Lyrics: NextPage = () => {
	return (
		<>
			<MainHeading text="Lyrics" />
			<LyricsWrapper>
				<div style={{ flex: 1 }} />
				<LyricsList>
					<li id="haunted">
						<h2>Haunted Mansion</h2>
						<p>
							The undead found a way into the mansion
							<br />
							Count Mirloff disturbed in his sleep
							<br />
							The ancestors stray in the dark
							<br />
							Consumed by vengeance
							<br />
							Driven by rage
						</p>
						<p>
							Gravediggers dug to deep
							<br />
							Gravediggers dug to deep
							<br />
							Gravediggers dug to deep
							<br />
							Gravediggers dug to deep
							<br />
						</p>
						<p>
							Uncountable wealth passed through centuries
							<br />
							Murders, deceits on which all was built
							<br />
							The gouls will not obliage as when alive
							<br />
							The final slaughter
							<br />
							The end of the herritage
						</p>
					</li>
					<li id="ana">
						<h2>Ana Oråd</h2>
						<p>
							Jag anar oråd
							<br />
							Går runt på upprörd jord
							<br />
							Här kommer spillas blod
							<br />
							Nu väntar ond bråd död
						</p>
						<p>
							I mitt liv
							<br />
							Ger så satans mycket tid
							<br />
							Åt folk som inte ger ett skit
							<br />I om jag lever eller dör
						</p>
					</li>
					<li id="gravity">
						<h2>Anti Anti-Gravity</h2>
						<p>
							You fear falling down
							<br />
							I fear falling away
							<br />
							Falling away into space
							<br />
							Gravity can't make me stay
						</p>
						<p>
							The tide is high but I'm holding on
							<br />
							I'm gonna be the only one in space
							<br />
							Skulls in space
							<br />
							Skulls in space
						</p>
						<p>
							Disconnection was by attraction
							<br />
							Now I question gravitation
							<br />
							Don't mess with the moon
							<br />
							It'll all go to hell
							<br />
							Or we'll all end up dwelling in space
						</p>
						Oh, it strikes
						<br />
						Oh it strikes
						<br />
						Strikes at heights
					</li>
					<li>
						<h2 id="liv">Ge Mig Liv</h2>
						<p>
							Mörker mörknar
							<br />
							Mark murar mörker
							<br />
							Marken skakar
							<br />
							Murar växer
							<br />
							Mörker mörknar
							<br />
							Mark murar mörker
							<br />
							Marken skakar
							<br />
							Allting rasar
						</p>
						<p>
							Ge mig Liv
							<br />
							Resa i tid
							<br />
							För att ge dig liv
							<br />
							Minns vår tid
							<br />
							Ge mig Liv
							<br />
							Ge mig Liv
						</p>
						<p>
							Sand, skratt, solsken
							<br />
							Sol, skratt, skoj
							<br />
							Sand av sorg
							<br />
							Salt sand av sorg
							<br />
							Sand, skratt, solsken
							<br />
							Sol, skratt, skoj
							<br />
							Sand av sorg
							<br />
							Salt sand av sorg
						</p>
						<p>
							Minns vår tid
							<br />
							Vila i frid
							<br />
							Vila min Liv
						</p>
					</li>
					<li>
						<h2 id="abunda">Abunda</h2>
						<p>
							They see us shaking
							<br />
							They here us thrusting
							<br />
							Their eyes are starring
							<br />
							Their jaws are dropping
							<br />
							They wanna be us
							<br />
							They wanna have us
							<br />
							Their knees are trembeling
							<br />
							They cannot stand it
						</p>
						<p>
							Shaking our asses
							<br />
							Shaking our asses
							<br />
							Smashing them fascists
							<br />
							Smashing them fascists
							<br />
							Shaking our asses
							<br />
							Shaking our asses
						</p>
						<p>
							Their blood is rushing
							<br />
							Towards volcanical
							<br />
							Far from mechanical
							<br />
							Eruptable
						</p>
					</li>
					<li>
						<h2 id="rysarn">Skogsrysarn</h2>
						<p>
							Mystic woods
							<br />
							Barren trees
							<br />
							Mossy fields
							<br />
							Fallen leaves
							<br />
							Electric feelings
							<br />
							Lost deers
							<br />
							Poison fungus
							<br />
							Rotten stomp
						</p>
						<p>
							Thick mist
							<br />
							Forest nymph
							<br />
							Black pond
							<br />
							Dirty one
							<br />
							Life underground you'll find
							<br />
							Better make sure you don't fall behind
						</p>
						<p>
							Mystic woods
							<br />
							Giant wolfs
							<br />
							Rotten leaves
							<br />
							Fallen trees
							<br />
							Bottomless hunger
							<br />
							Tasty roots
							<br />
							Eternal slumber
							<br />
							Poisoned fruit
						</p>
						<p>
							Thick mist
							<br />
							Forest nymph
							<br />
							Black pond
							<br />
							Dirty one
							<br />
							Life underground not yours to define
							<br />
							Oh fertile soil
							<br />
							Oh fertile soil
						</p>
						<p>
							Down, down, deeper down
							<br />
							Deeper underground
							<br />
							Down through badgers den
							<br />
							Deeper down, descend
							<br />
							Down through dirty soil
							<br />
							Through thick and clingy oil
							<br />
							Skulls and bugs and larva
							<br />
							Magnetic core and lava
						</p>
					</li>
					<li id="car">
						<h2>Our Car</h2>
						<p>
							Driving down the highway in our car
							<br />
							Heading for a cabin in the woods
							<br />
							Bitten by mosquitoes everywhere
							<br />
							Searching for some flowers in the fields
							<br />
							Looking at the chimney
							<br />
							Falls apart
							<br />
							Climbing up the attic
							<br />
							Monsters in the dark
							<br />
							Leaving in a hurry
							<br />
							Buring tires
							<br />
							Omkörd by a Volvo
							<br />
							Shot by stone
						</p>
					</li>
				</LyricsList>
				<SongList>
					<Image
						src={albumCover}
						alt="Album cover of album called Deathracer"
						height={125}
						width={125}
					/>
					<li>
						<Link href="#haunted">Haunted Mansion</Link>
					</li>
					<li>
						<Link href="#ana">Ana Oråd</Link>
					</li>
					<li>
						<Link href="#gravity">Anti Anti-Gravity</Link>
					</li>
					<li>
						<Link href="#liv">Ge Mig Liv</Link>
					</li>
					<li>
						<Link href="#abunda">Abunda</Link>
					</li>
					<li>
						<Link href="#rysarn">Skogsrysarn</Link>
					</li>
					<li>
						<Link href="#car">Our Car</Link>
					</li>
				</SongList>
				<ToTopOfPageButton />
			</LyricsWrapper>
		</>
	);
};

export default Lyrics;
