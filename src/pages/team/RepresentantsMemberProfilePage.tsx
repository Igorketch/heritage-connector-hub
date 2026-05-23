import { useLanguage } from '@/contexts/LanguageContext';
import { getAllRepresentantsMembers } from '@/data/representantsNationauxData';
import { useTeamMembers } from '@/hooks/useTeamMembers';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const RepresentantsMemberProfilePage = () => {
  const { language, t } = useLanguage();
  const { members, hasData } = useTeamMembers('representants');
  const list = hasData ? members : getAllRepresentantsMembers(language);
  return (
    <GenericMemberProfilePage
      members={list}
      backPath="/team/representants-nationaux"
      backLabel={t('team.cat.representants')}
    />
  );
};

export default RepresentantsMemberProfilePage;
